import React from 'react';
import {HelloWorldNew} from './hello-world-new';

export default {
    title: 'Design System/Hello World New',
    component: HelloWorldNew,
};

export const Default = () => <HelloWorldNew />;

export const CustomGreeting = () => <HelloWorldNew greeting="eat toast" />;

export const Bold = () => <HelloWorldNew greeting="eat toast" bold={true} />;
