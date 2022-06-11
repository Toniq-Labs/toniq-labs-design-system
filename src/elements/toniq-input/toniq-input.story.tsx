import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqInput} from '../react-components';

const inputStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    value: {
        table: {
            disable: true,
        },
    },
    placeholder: {
        name: 'Placeholder',
        control: 'text',
    },
    allowedInputs: {
        name: 'Allowed Letters',
        control: 'text',
    },
    blockedInputs: {
        name: 'Blocked Letters',
        control: 'text',
    },
    innerInputElement: {
        table: {
            disable: true,
        },
    },
} as const);

const inputComponentStoryMeta: ComponentMeta<typeof ToniqInput> = {
    title: 'Elements/Toniq Input',
    component: ToniqInput,
    argTypes: inputStoryControls as ArgTypes,
    args: {
        placeholder: '',
        allowedInputs: '',
        blockedInputs: '',
    },
};

export default inputComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof inputStoryControls, string>) => {
    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With assigned values
            </h3>
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                value="with value"
            />
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                placeholder="with placeholder"
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With input restrictions
            </h3>
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                placeholder="letter 'd' is blocked"
                blockedInputs="d"
            />
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                placeholder="only numbers are allowed"
                allowedInputs={/\d/}
            />
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                placeholder="numbers are blocked"
                allowedInputs={/\D/}
            />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Disabled
            </h3>
            <ToniqInput
                value="cannot type into"
                disabled={true}
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
            />

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom inputs
            </h3>
            <ToniqInput
                onValueChange={handleEventAsAction}
                onInputBlocked={handleEventAsAction}
                placeholder={controls.placeholder}
                allowedInputs={controls.allowedInputs}
                blockedInputs={controls.blockedInputs}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Input';
