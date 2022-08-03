import {ArgTypes, ComponentMeta} from '@storybook/react';
import {ArrayElement} from 'augment-vir';
import {css} from 'element-vir';
import React, {useReducer} from 'react';
import {ArrowsSort24Icon} from '../../icons';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {toniqColorCssVarNames} from '../../styles';
import {ToniqDropdown} from '../react-components';
import {ToniqDropdown as NativeToniqDropdown, ToniqDropdownOption} from './toniq-dropdown.element';

const options: ToniqDropdownOption<number | string>[] = [
    {
        value: 1,
        label: 'Option 1',
    },
    {
        value: 2,
        label: 'Option 2',
    },
    {
        value: '3',
        label: 'Option 3',
    },
    {
        value: 6,
        label: 'Really really super duper long option!',
    },
];

const dropdownStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    selected: {
        options: Object.keys(options),
        mapping: options,
        control: {
            type: 'select',
            labels: options.reduce((accum, option) => {
                accum[option.value] = option.label;
                return accum;
            }, {} as Record<PropertyKey, string>),
        },
    },
    dropdownOpen: {
        control: 'boolean',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqDropdown> = {
    title: 'Elements/Toniq Dropdown',
    component: ToniqDropdown,
    argTypes: dropdownStoryControls as ArgTypes,
    // default args
    args: {
        selected: options[0],
        options: options,
        dropdownOpen: false,
    },
};

export default componentStoryMeta;

const dropdownSelectionStateInit = {
    static: {
        default: options[0]!,
        defaultWithIcon: options[0]!,
        withPrefixAndIcon: options[0]!,
        withPrefixOnly: options[0]!,
        customSize: options[3]!,
        growHeight: options[3]!,
        withDifferentBackgroundColor: options[0]!,
    },
    custom: options[0]!,
} as const;

type DropdownStoryState = typeof dropdownSelectionStateInit;

export const mainStory = (controls: Record<keyof typeof dropdownStoryControls, any>) => {
    const [
        dropdownSelectionStates,
        updateDropdownSelectionStates,
    ] = useReducer(
        (
            state: DropdownStoryState,
            {
                key,
                subKey,
                option,
            }: {
                key: keyof DropdownStoryState;
                subKey: keyof DropdownStoryState['static'] | undefined;
                option: ArrayElement<typeof options>;
            },
        ): DropdownStoryState => {
            if (key === 'custom') {
                return {...state, custom: option};
            } else if (subKey !== undefined) {
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [subKey]: option,
                    },
                };
            } else {
                throw new Error(`Key was not custom but subKey was not defined.`);
            }
        },
        dropdownSelectionStateInit,
    );

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: String(css`
                        ${NativeToniqDropdown} {
                            margin: 8px;
                        }
                    `),
                }}
            />
            <article>
                <h3>Static examples</h3>
                <ToniqDropdown
                    options={options}
                    selected={dropdownSelectionStates.static.default}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'default',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    options={options}
                    icon={ArrowsSort24Icon}
                    selected={dropdownSelectionStates.static.defaultWithIcon}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'defaultWithIcon',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    options={options}
                    icon={ArrowsSort24Icon}
                    selectedLabelPrefix={'Sort By: '}
                    selected={dropdownSelectionStates.static.withPrefixAndIcon}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'withPrefixAndIcon',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    options={options}
                    selectedLabelPrefix={'Sort By: '}
                    selected={dropdownSelectionStates.static.withPrefixOnly}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'withPrefixOnly',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    style={{
                        width: '350px',
                        height: '200px',
                    }}
                    options={options}
                    selectedLabelPrefix={'Sort By: '}
                    selected={dropdownSelectionStates.static.customSize}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'customSize',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    options={options}
                    selectedLabelPrefix={'Sort By: '}
                    selected={dropdownSelectionStates.static.growHeight}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'growHeight',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <ToniqDropdown
                    style={{
                        [String(toniqColorCssVarNames.accentSecondary.backgroundColor)]:
                            'transparent',
                    }}
                    options={options}
                    icon={ArrowsSort24Icon}
                    selected={dropdownSelectionStates.static.withDifferentBackgroundColor}
                    onSelectChange={(event: CustomEvent<ArrayElement<typeof options>>) => {
                        updateDropdownSelectionStates({
                            key: 'static',
                            subKey: 'withDifferentBackgroundColor',
                            option: event.detail,
                        });
                        handleEventAsAction(event);
                    }}
                />
                <h3>Customized example</h3>
                <ToniqDropdown
                    options={options}
                    selected={controls.selected}
                    dropdownOpen={controls.dropdownOpen}
                    onSelectChange={handleEventAsAction}
                />
            </article>
        </>
    );
};
mainStory.storyName = 'Toniq Dropdown';
