import {getObjectTypedKeys, Overwrite, Writeable} from 'augment-vir';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    DefinedTypedEventNameDefinition,
    EventsInitMap,
    PropertyInitMapBase,
} from 'element-vir';
import {property} from 'lit/decorators.js';
import React, {Component, CSSProperties, HTMLAttributes} from 'react';
import {ValueOf} from '../augments/type';

type DeclarativeElementFromDefinition<DefinitionGeneric extends DeclarativeElementDefinition> =
    DefinitionGeneric extends DeclarativeElementDefinition<
        infer InputsGeneric,
        infer PropertyInitGeneric,
        infer EventsInitGeneric,
        infer HostClassKeys,
        infer CssVarKeys
    >
        ? DeclarativeElement<
              InputsGeneric,
              PropertyInitGeneric,
              EventsInitGeneric,
              HostClassKeys,
              CssVarKeys
          >
        : never;

type ReactExtraProps = Partial<{
    className: string;
    style: CSSProperties;
}>;

export type ElementEventListenerProps<EventsGeneric extends EventsInitMap> = Partial<
    ValueOf<{
        [EventName in keyof EventsGeneric]: EventName extends string
            ? [`on${Capitalize<EventName>}`, EventsGeneric[EventName]]
            : never;
    }> extends [infer NewKey, infer EventTypeWrapper]
        ? NewKey extends PropertyKey
            ? Record<
                  NewKey,
                  EventTypeWrapper extends DefinedTypedEventNameDefinition<infer EventType>
                      ? (event: CustomEvent<EventType>) => void | Promise<void>
                      : never
              >
            : never
        : never
>;

type ReactWrapperProps<
    InputGeneric extends PropertyInitMapBase,
    EventsGeneric extends EventsInitMap,
> = Readonly<
    InputGeneric &
        ReactExtraProps &
        Overwrite<
            Partial<
                ElementEventListenerProps<EventsGeneric> extends never
                    ? {}
                    : ElementEventListenerProps<EventsGeneric>
            >,
            HTMLAttributes<DeclarativeElement>
        >
> &
    // allow any HTML attributes
    Partial<Record<string, unknown>>;

type ReactWrapperElementInstance<
    InputGeneric extends PropertyInitMapBase,
    EventsGeneric extends EventsInitMap,
    NativeComponent extends DeclarativeElementDefinition<InputGeneric>,
> = DeclarativeElementFromDefinition<NativeComponent> &
    ReactWrapperProps<InputGeneric, EventsGeneric>;

const ignoreTheseProps = new Set<PropertyKey>([
    'children',
    'style',
]);

export function wrapInReactComponent<ElementGeneric extends DeclarativeElementDefinition>(
    elementConstructor: ElementGeneric,
) {
    type InputGeneric = ElementGeneric extends DeclarativeElementDefinition<infer InnerInputs>
        ? InnerInputs
        : never;
    type EventsGeneric = ElementGeneric extends DeclarativeElementDefinition<
        any,
        any,
        infer InnerEvents
    >
        ? InnerEvents
        : never;

    const wrappedComponent = class extends Component<
        ReactWrapperProps<InputGeneric, EventsGeneric>
    > {
        public componentRef: any =
            React.createRef<
                ReactWrapperElementInstance<InputGeneric, EventsGeneric, ElementGeneric>
            >();
        public listenerMap = new Map<string, (event: Event) => void>();

        constructor(props: ReactWrapperProps<InputGeneric, EventsGeneric>) {
            super(props);
        }

        public attachLatestProps(
            previousProps: ReactWrapperProps<InputGeneric, EventsGeneric> | undefined,
        ) {
            const componentInstance = this.componentRef.current as HTMLElement;

            getObjectTypedKeys(this.props).forEach((propKey) => {
                const currentProp = this.props[propKey];
                const listenerType = extractListenerType(propKey);
                const newPropIsDifferent = previousProps
                    ? previousProps[propKey] !== currentProp
                    : true;

                if (newPropIsDifferent) {
                    if (listenerType && typeof currentProp === 'function') {
                        const lastListener = this.listenerMap.get(listenerType);
                        if (lastListener) {
                            componentInstance.removeEventListener(listenerType, lastListener);
                        }
                        const newListener = (event: Event) => {
                            currentProp(event);
                        };
                        this.listenerMap.set(listenerType, newListener);

                        componentInstance.addEventListener(listenerType, newListener);
                    } else if (!listenerType) {
                        if (!ignoreTheseProps.has(propKey)) {
                            console.log({propKey});
                            if (propKey !== 'className') {
                                property()(componentInstance, propKey);
                            }
                            (componentInstance as any)[propKey] = currentProp;
                        }
                    }
                }
            });
        }

        public override componentDidMount() {
            const componentInstance = this.componentRef.current;
            /**
             * This toJSON method makes it so that events can be properly logged in storybook.
             * Otherwise, it tries to stringify the event, which tries to call .toJSON on the
             * element (as it'll be in the event as "target" or "srcElement", etc.
             */

            if (componentInstance) {
                componentInstance.toJSON = () => componentInstance.tagName;

                this.attachLatestProps(undefined);
            }
        }

        public override componentDidUpdate(
            prevProps: ReactWrapperProps<InputGeneric, EventsGeneric>,
        ) {
            this.attachLatestProps(prevProps);
        }

        public override render() {
            const TagName = elementConstructor.tagName as any;
            return (
                <TagName style={this.props.style} ref={this.componentRef}>
                    {this.props.children}
                </TagName>
            );
        }
    };

    const extendedWrappedComponent = wrappedComponent as Pick<ElementGeneric, 'tagName'> &
        typeof wrappedComponent;

    (extendedWrappedComponent as Writeable<typeof extendedWrappedComponent>).tagName =
        elementConstructor.tagName;

    return extendedWrappedComponent;
}

function extractListenerType(propKey: PropertyKey): string | undefined {
    if (typeof propKey !== 'string') {
        return undefined;
    }
    const match = propKey.match(/^on(.+)/);
    if (match) {
        const eventType = match[1];
        const firstLetter = eventType?.[0];
        if (eventType && firstLetter) {
            if (firstLetter === firstLetter.toLowerCase()) {
                return undefined;
            } else {
                // this indicates that the first letter is uppercase
                return firstLetter.toLowerCase() + eventType.slice(1);
            }
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
