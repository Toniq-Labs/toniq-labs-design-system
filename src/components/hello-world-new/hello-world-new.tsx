import React, {FunctionComponent} from 'react';
import './hello-world-new.scoped.scss';

export type HelloWorldProps = Partial<{
    greeting: string;
    bold: boolean;
}>;

export const defaultHelloWorldProps: Required<HelloWorldProps> = {
    greeting: 'Hello',
    bold: false,
};

export const HelloWorld: FunctionComponent<HelloWorldProps | undefined> = (
    props?: HelloWorldProps,
) => {
    const greetingText = props?.greeting ?? defaultHelloWorldProps.greeting;
    const isBold = props?.bold ?? defaultHelloWorldProps.bold;

    return (
        <div className={`hello-world ${isBold ?? defaultHelloWorldProps.bold ? 'bold' : ''}`}>
            {greetingText} world!
        </div>
    );
};
