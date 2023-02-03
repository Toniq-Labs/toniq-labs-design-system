import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {ComponentProps} from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {createMultiElementState} from '../../storybook-helpers/multi-element-state';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {toniqFontStyles} from '../../styles/fonts';
import {ToniqRadioGroup} from '../react-components';
import {
    ToniqRadioGroup as NativeToniqRadioGroup,
    ToniqRadioGroupEntry,
} from './toniq-radio-group.element';

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
    automaticName: '2' as string,
    specifiedName: '3' as string,
    customVars: '1' as string,
    customStyles: '1' as string,
    widthRestriction: '1' as string,
    withDisabled: '2' as string,
    noLabels: '3' as string,
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

    function makeInputs(
        entries: ReadonlyArray<ToniqRadioGroupEntry>,
        key: keyof typeof state,
        groupName?: string,
    ) {
        const props: ComponentProps<typeof ToniqRadioGroup> = {
            entries,
            groupName,
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
                    stateKeys.automaticName,
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                specified group name
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
                    stateKeys.specifiedName,
                    'my radios',
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom CSS Vars
            </h3>
            <ToniqRadioGroup
                style={{
                    [String(NativeToniqRadioGroup.cssVarNames.checkedLabelColor)]: 'blue',
                    [String(NativeToniqRadioGroup.cssVarNames.uncheckedLabelColor)]: 'green',
                    [String(NativeToniqRadioGroup.cssVarNames.checkedRadioColor)]: 'red',
                    [String(NativeToniqRadioGroup.cssVarNames.uncheckedRadioColor)]: 'pink',
                }}
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
                    stateKeys.customVars,
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom styles
            </h3>
            <ToniqRadioGroup
                style={{
                    flexDirection: 'row',
                    gap: '32px',
                }}
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
                    stateKeys.customStyles,
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Width restriction
            </h3>
            <ToniqRadioGroup
                style={{
                    maxWidth: '150px',
                }}
                {...makeInputs(
                    [
                        {
                            label: 'really really really really really really really really really really really really really really really  long label',
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
                    stateKeys.widthRestriction,
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                No Labels
            </h3>
            <ToniqRadioGroup
                {...makeInputs(
                    [
                        {
                            value: '1',
                        },
                        {
                            value: '2',
                        },
                        {
                            value: '3',
                        },
                    ],
                    stateKeys.noLabels,
                )}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Entry 1 disabled
            </h3>
            <ToniqRadioGroup
                {...makeInputs(
                    [
                        {
                            label: 'entry 1',
                            value: '1',
                            disabled: true,
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
                    stateKeys.withDisabled,
                )}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Radio Group';
