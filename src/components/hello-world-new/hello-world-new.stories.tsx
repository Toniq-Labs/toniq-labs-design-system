import React from 'react';
import {HelloWorld} from './hello-world-new';

export default {
    title: 'Design System/HelloWorldNew',
    component: HelloWorld,
};

export const Default = () => <HelloWorld />;

export const CustomGreeting = () => <HelloWorld greeting="eat toast" />;

export const Bold = () => <HelloWorld greeting="eat toast" bold={true} />;
