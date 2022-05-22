import {getObjectTypedKeys} from 'augment-vir';
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
    return class extends Component<ReactWrapperProps<ElementGeneric>> {
        public componentRef: any = React.createRef<ReactWrapperElementInstance<ElementGeneric>>();

        constructor(props: Partial<ReactWrapperProps<ElementGeneric>>) {
            super(props);
        }

        public override componentDidMount() {
            const componentInstance = this.componentRef.current;
            /**
             * This toJSON method makes it so that events can be properly logged in storybook.
             * Otherwise, it tries to stringify the event, which tries to call .toJSON on the
             * element (as it'll be in the event as "target" or "srcElement", etc.
             */
            componentInstance.toJSON = () => componentInstance.tagName;
            if (componentInstance) {
                getObjectTypedKeys(this.props).forEach((propKey) => {
                    const currentProp = this.props[propKey];
                    const listenerType = extractListenerType(propKey);

                    if (listenerType && typeof currentProp === 'function') {
                        componentInstance.addEventListener(listenerType, (event: Event) => {
                            currentProp(event);
                        });
                    } else if (!listenerType) {
                        if (!ignoreTheseProps.has(propKey)) {
                            componentInstance[propKey] = currentProp;
                        }
                    }
                });
            }
        }

        public override componentDidUpdate(prevProps: ReactWrapperProps<ElementGeneric>) {
            const componentInstance = this.componentRef.current;

            getObjectTypedKeys(this.props).forEach((propKey) => {
                const currentProp = this.props[propKey];

                if (
                    !ignoreTheseProps.has(propKey) &&
                    componentInstance &&
                    prevProps[propKey] !== currentProp
                ) {
                    componentInstance[propKey] = currentProp;
                }
            });
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
