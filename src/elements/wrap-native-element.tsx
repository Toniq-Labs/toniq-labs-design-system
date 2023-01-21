import {getObjectTypedKeys, Overwrite, Writeable} from '@augment-vir/common';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    DefinedTypedEventNameDefinition,
    EventsInitMap,
    HostClassNamesMap,
    PropertyInitMapBase,
} from 'element-vir';
import React, {Component, CSSProperties, HTMLAttributes} from 'react';

type DeclarativeElementFromDefinition<DefinitionGeneric extends DeclarativeElementDefinition> =
    DefinitionGeneric extends DeclarativeElementDefinition<
        infer TagNameGeneric,
        infer InputsGeneric,
        infer PropertyInitGeneric,
        infer EventsInitGeneric,
        infer HostClassKeys,
        infer CssVarKeys
    >
        ? DeclarativeElement<
              TagNameGeneric,
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

type OnEventName<EventName> = EventName extends string ? `on${Capitalize<EventName>}` : never;

export type ElementEventListenerProps<EventsGeneric extends EventsInitMap> = {
    [EventName in keyof EventsGeneric as OnEventName<EventName>]: EventsGeneric[EventName] extends DefinedTypedEventNameDefinition<
        infer EventType
    >
        ? (event: CustomEvent<EventType>) => void | Promise<void>
        : never;
};

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
    NativeComponent extends DeclarativeElementDefinition<any, InputGeneric>,
> = DeclarativeElementFromDefinition<NativeComponent> &
    ReactWrapperProps<InputGeneric, EventsGeneric>;

const ignoreTheseProps = new Set<PropertyKey>([
    'children',
    'style',
    'key',
]);

export function wrapInReactComponent<ElementGeneric extends DeclarativeElementDefinition>(
    elementConstructor: ElementGeneric,
) {
    type InputGeneric = ElementGeneric extends DeclarativeElementDefinition<any, infer InnerInputs>
        ? InnerInputs
        : never;
    type EventsGeneric = ElementGeneric extends DeclarativeElementDefinition<
        any,
        any,
        any,
        infer InnerEvents
    >
        ? InnerEvents
        : never;
    type HostClassKeysGeneric = ElementGeneric extends DeclarativeElementDefinition<
        any,
        any,
        any,
        any,
        infer HostClassKeys
    >
        ? HostClassKeys
        : never;

    const wrappedComponent = class extends Component<
        ReactWrapperProps<InputGeneric, EventsGeneric>
    > {
        public componentRef: any =
            React.createRef<
                ReactWrapperElementInstance<InputGeneric, EventsGeneric, ElementGeneric>
            >();
        public listenerMap = new Map<string, (event: Event) => void>();
        public static readonly hostClasses: HostClassNamesMap<string, HostClassKeysGeneric> =
            elementConstructor.hostClasses;
        public static readonly cssVarNames = elementConstructor.cssVarNames;
        public static readonly cssVarValues = elementConstructor.cssVarValues;
        public static readonly native = elementConstructor;

        constructor(props: ReactWrapperProps<InputGeneric, EventsGeneric>) {
            super(props);
        }

        public attachLatestProps(
            previousProps: ReactWrapperProps<InputGeneric, EventsGeneric> | undefined,
        ) {
            const elementInstance = this.componentRef.current as DeclarativeElement;
            const inputsToAssign: Partial<InputGeneric> = {};

            getObjectTypedKeys(this.props).forEach((propKey) => {
                const propValue = this.props[propKey];
                const listenerType = extractListenerType(propKey, elementInstance);
                const newPropIsDifferent = previousProps
                    ? previousProps[propKey] !== propValue
                    : true;

                if (newPropIsDifferent) {
                    if (listenerType && typeof propValue === 'function') {
                        const lastListener = this.listenerMap.get(listenerType);
                        if (lastListener) {
                            elementInstance.removeEventListener(listenerType, lastListener);
                        }
                        const newListener = (event: Event) => {
                            propValue(event);
                        };
                        this.listenerMap.set(listenerType, newListener);

                        elementInstance.addEventListener(listenerType, newListener);
                    } else if (!listenerType) {
                        if (!ignoreTheseProps.has(propKey)) {
                            if (propKey === 'className') {
                                elementInstance.className = propValue;
                            } else {
                                inputsToAssign[propKey] = propValue;
                            }
                        }
                    }
                }
            });

            if (Object.keys(inputsToAssign).length) {
                elementInstance.assignInputs(inputsToAssign);
            }
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

function extractListenerType(
    propKey: PropertyKey,
    declarativeElement: DeclarativeElement,
): string | undefined {
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
                // this indicates that the first letter is uppercase
            } else {
                const possibleEventName = firstLetter.toLowerCase() + eventType.slice(1);
                if (possibleEventName in declarativeElement.definition.events) {
                    return possibleEventName;
                } else {
                    return possibleEventName.toLowerCase();
                }
            }
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
