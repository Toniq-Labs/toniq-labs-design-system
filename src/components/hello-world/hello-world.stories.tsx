import React from 'react';
import {HelloWorld} from './hello-world';

export default {
    title: 'Design System/Hello World',
    component: HelloWorld,
};

export const Default = () => <HelloWorld />;

export const CustomGreeting = () => <HelloWorld greeting="eat toast" />;

export const Bold = () => <HelloWorld greeting="eat toast" bold={true} />;
