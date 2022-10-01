import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {CSSProperties} from 'react';
import {Search24Icon} from '../../icons';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqInput} from '../react-components';

const inputStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
    value: {
        table: {
            disable: true,
        },
    },
    placeholder: {
        name: 'Placeholder',
        control: 'text',
    },
    disabled: {
        name: 'Disabled',
        control: 'boolean',
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
        placeholder: 'Custom placeholder',
        allowedInputs: '',
        blockedInputs: '',
        disabled: false,
    },
};

export default inputComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof inputStoryControls, string>) => {
    const sectionStyles: CSSProperties = {display: 'flex', gap: '8px', flexWrap: 'wrap'};

    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With assigned values
            </h3>
            <section style={sectionStyles}>
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
                <ToniqInput
                    onValueChange={handleEventAsAction}
                    onInputBlocked={handleEventAsAction}
                    placeholder="with icon"
                    icon={Search24Icon}
                />
                <ToniqInput
                    onValueChange={handleEventAsAction}
                    onInputBlocked={handleEventAsAction}
                    placeholder="stretched"
                    style={{width: '500px'}}
                    icon={Search24Icon}
                />
            </section>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                With input restrictions
            </h3>
            <section style={sectionStyles}>
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
            </section>

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Disabled
            </h3>
            <section style={sectionStyles}>
                <ToniqInput
                    value="cannot type into"
                    disabled={true}
                    onValueChange={handleEventAsAction}
                    onInputBlocked={handleEventAsAction}
                />
            </section>

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom inputs
            </h3>
            <section style={sectionStyles}>
                <ToniqInput
                    onValueChange={handleEventAsAction}
                    onInputBlocked={handleEventAsAction}
                    placeholder={controls.placeholder}
                    allowedInputs={controls.allowedInputs}
                    blockedInputs={controls.blockedInputs}
                    disabled={!!controls.disabled}
                />
            </section>
        </article>
    );
};
mainStory.storyName = 'Toniq Input';
