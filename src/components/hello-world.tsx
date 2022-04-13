import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

export type HelloWorldProps = Partial<{
    greeting: string;
    bold: boolean;
}>;

export const defaultHelloWorldProps: Required<HelloWorldProps> = {
    greeting: 'Hello',
    bold: false,
};

const StyledHelloWorld = styled.div<HelloWorldProps>`
    font-size: 2em;
    font-weight: ${(props) => {
        console.log({props, defaultHelloWorldProps});
        return props?.bold ?? defaultHelloWorldProps.bold ? 'bold' : 'normal';
    }};
    font-family: sans-serif;
`;

export const HelloWorld: FunctionComponent<HelloWorldProps | undefined> = (
    props?: HelloWorldProps,
) => {
    const greetingText = props?.greeting ?? defaultHelloWorldProps.greeting;
    const isBold = props?.bold ?? defaultHelloWorldProps.bold;

    return <StyledHelloWorld bold={isBold}>{greetingText} world!</StyledHelloWorld>;
};
