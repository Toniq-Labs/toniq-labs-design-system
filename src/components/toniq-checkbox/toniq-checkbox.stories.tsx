import {TypedEvent} from 'element-vir';
import React from 'react';
import {ToniqCheckbox} from '../react-components';

export default {
    title: 'Design System/Toniq Checkbox',
    component: ToniqCheckbox,
};

const handleChange = (e: TypedEvent) => {
    console.log(e.detail);
};

export const Default = () => <ToniqCheckbox text="Orange" />;

export const Checked = () => <ToniqCheckbox text="Orange" checked />;

export const ChangeEvent = () => <ToniqCheckbox text="Orange" onChange={handleChange} />;
