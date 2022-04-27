import React, {FunctionComponent} from 'react';
import './hello-world-new.scoped.scss';

export type HelloWorldNewProps = Partial<{
    greeting: string;
    bold: boolean;
}>;

export const defaultHelloWorldNewProps: Required<HelloWorldNewProps> = {
    greeting: 'Hello',
    bold: false,
};

export const HelloWorldNew: FunctionComponent<HelloWorldNewProps | undefined> = (
    props?: HelloWorldNewProps,
) => {
    const greetingText = props?.greeting ?? defaultHelloWorldNewProps.greeting;
    const isBold = props?.bold ?? defaultHelloWorldNewProps.bold;

    return (
        <div className={`hello-world ${isBold ?? defaultHelloWorldNewProps.bold ? 'bold' : ''}`}>
            {greetingText} world!
        </div>
    );
};
