import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {ComponentProps} from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {createMultiElementState} from '../../storybook-helpers/multi-element-state';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqRadioGroup} from '../react-components';
import {ToniqRadioGroupEntry} from './toniq-radio-group.element';

const radioGroupStoryControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
    ...standardControls,
    label: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqRadioGroup> = {
    title: 'Elements/Toniq Radio Group',
    component: ToniqRadioGroup,
    argTypes: radioGroupStoryControls,
    args: {
        label: 'Custom text here',
    },
};

export default componentStoryMeta;

const radioGroupStatesInit = {
    firstEntry: '2' as string,
} as const;

export const mainStory = (
    controls: Record<keyof typeof radioGroupStoryControls, string | boolean>,
) => {
    const customText = String(controls.label);

    const [
        state,
        updateState,
        stateKeys,
    ] = createMultiElementState(radioGroupStatesInit);

    function makeInputs(entries: ReadonlyArray<ToniqRadioGroupEntry>, key: keyof typeof state) {
        const props: ComponentProps<typeof ToniqRadioGroup> = {
            entries,
            value: state[key],
            onValueChange: (event) => {
                const update = {
                    key,
                    value: event.detail,
                };
                updateState(update);
                handleEventAsAction(event);
            },
        };

        return props;
    }

    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Automatic group name
            </h3>
            <ToniqRadioGroup
                {...makeInputs(
                    [
                        {
                            label: 'entry 1',
                            value: '1',
                        },
                        {
                            label: 'entry 2',
                            value: '2',
                        },
                        {
                            label: 'entry 3',
                            value: '3',
                        },
                    ],
                    stateKeys.firstEntry,
                )}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Radio Group';
