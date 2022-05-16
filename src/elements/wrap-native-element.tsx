import {getObjectTypedKeys} from 'augment-vir';
import {FunctionalElement, FunctionalElementInstance} from 'element-vir';
import React, {Component} from 'react';

type ReactWrapperProps<NativeComponent extends FunctionalElement> = Partial<
    NativeComponent['initInput']['props']
> &
    Record<string, any>;

type ReactWrapperElementInstance<NativeComponent extends FunctionalElement> =
    FunctionalElementInstance<NativeComponent['props']> & ReactWrapperProps<NativeComponent>;

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
            if (componentInstance) {
                getObjectTypedKeys(this.props).forEach((propKey) => {
                    const currentProp = this.props[propKey];
                    const listenerType = extractListenerType(propKey);

                    if (listenerType && typeof currentProp === 'function') {
                        componentInstance.addEventListener(listenerType, (event: Event) => {
                            currentProp(event);
                        });
                    } else {
                        if (propKey !== 'children') componentInstance[propKey] = currentProp;
                    }
                });
            }
        }

        public override componentDidUpdate(prevProps: ReactWrapperProps<ElementGeneric>) {
            const componentInstance = this.componentRef.current;

            getObjectTypedKeys(this.props).forEach((propKey) => {
                const currentProp = this.props[propKey];

                if (componentInstance && prevProps[propKey] !== currentProp) {
                    componentInstance[propKey] = currentProp;
                }
            });
        }

        public override render() {
            const TagName = elementConstructor.tagName as any;
            return <TagName ref={this.componentRef}>{this.props.children}</TagName>;
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
