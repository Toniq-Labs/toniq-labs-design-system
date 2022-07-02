import {getObjectTypedKeys, Writeable} from 'augment-vir';
import {FunctionalElement, FunctionalElementInstance} from 'element-vir';
import React, {Component} from 'react';

type ReactWrapperProps<NativeComponent extends FunctionalElement> = Partial<
    NativeComponent['init']['props']
> &
    Record<string, any>;

type ReactWrapperElementInstance<NativeComponent extends FunctionalElement> =
    FunctionalElementInstance<NativeComponent> & ReactWrapperProps<NativeComponent>;

const ignoreTheseProps = new Set<PropertyKey>([
    'children',
    'style',
]);

export function wrapInReactComponent<ElementGeneric extends FunctionalElement>(
    elementConstructor: ElementGeneric,
) {
    const wrappedComponent = class extends Component<ReactWrapperProps<ElementGeneric>> {
        public componentRef: any = React.createRef<ReactWrapperElementInstance<ElementGeneric>>();
        public listenerMap = new Map<string, (event: Event) => void>();

        constructor(props: Partial<ReactWrapperProps<ElementGeneric>>) {
            super(props);
        }

        public attachLatestProps(previousProps: ReactWrapperProps<ElementGeneric> | undefined) {
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

        public override componentDidUpdate(prevProps: ReactWrapperProps<ElementGeneric>) {
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
