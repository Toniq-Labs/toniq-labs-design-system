import {getEnumTypedKeys} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ArrowsSort24Icon} from '../../icons';
import {allIconNames, allIconsByName} from '../../icons/icon.book-helper';
import {toniqColorCssVarNames} from '../../styles';
import {
    ToniqDropdown,
    ToniqDropdownDirectionEnum,
    ToniqDropdownOption,
} from './toniq-dropdown.element';

const exampleDropdownOptions = [
    {
        label: 'Option 1',
        value: 1,
    },
    {
        label: 'Option 2',
        value: 2,
    },
    {
        label: 'Option 3',
        value: 3,
    },
    {
        label: 'Really really super duper long option',
        value: 4,
    },
] as const satisfies ReadonlyArray<ToniqDropdownOption>;

const exampleVariations: ReadonlyArray<{
    title: string;
    inputs?: Partial<typeof ToniqDropdown.inputsType>;
    customStyle?: CSSResult;
}> = [
    {
        title: 'default',
    },
    {
        title: 'transparent background',
        customStyle: css`
            ${toniqColorCssVarNames.accentSecondary.backgroundColor}: transparent;
        `,
    },
    {
        title: 'disabled',
        inputs: {
            disabled: true,
        },
    },
];

const innerVariations: ReadonlyArray<{
    customStyle?: CSSResult;
    inputs?: Partial<typeof ToniqDropdown.inputsType>;
}> = [
    {},
    {
        customStyle: css`
            width: 500px;
            height: 100px;
        `,
    },
    {
        customStyle: css`
            max-height: 30px;
            min-height: 30px;
        `,
    },
];

export const toniqDropdownPage = defineBookPage({
    title: ToniqDropdown.tagName,
    parent: elementsBookPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: exampleDropdownOptions[0].label,
            options: exampleDropdownOptions.map((option) => option.label),
        }),
        Direction: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: 'Down',
            options: getEnumTypedKeys(ToniqDropdownDirectionEnum),
        }),
        Icon: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: ArrowsSort24Icon.iconName,
            options: [
                'None',
                ...allIconNames,
            ],
        }),
        Prefix: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'Sort by: ',
        }),
        'Force open': definePageControl({
            controlType: BookPageControlTypeEnum.Checkbox,
            initValue: false,
        }),
    },
    elementExamplesCallback({defineExample}) {
        exampleVariations.forEach((exampleVariation) => {
            defineExample({
                title: exampleVariation.title,
                stateInitStatic: {
                    selected: innerVariations.map((innerVariation) => innerVariation.inputs?.value),
                },
                styles: css`
                    :host {
                        display: flex;
                        gap: 16px;
                        flex-wrap: wrap;
                        align-items: center;
                    }
                `,
                renderCallback({state, updateState, controls}) {
                    return innerVariations.map((innerVariation, variationIndex) => {
                        const styles = css`
                            ${exampleVariation.customStyle ?? css``};
                            ${innerVariation.customStyle ?? css``};
                        `;
                        return html`
                            <${ToniqDropdown.assign({
                                ...exampleVariation.inputs,
                                ...innerVariation.inputs,
                                options: exampleDropdownOptions,
                                value:
                                    state.selected[variationIndex] ??
                                    exampleDropdownOptions.find(
                                        (option) => option.label === controls.Selected,
                                    ),
                                icon: allIconsByName[controls.Icon],
                                selectedLabelPrefix: controls.Prefix,
                                direction:
                                    ToniqDropdownDirectionEnum[
                                        controls.Direction as keyof typeof ToniqDropdownDirectionEnum
                                    ],
                                _forceOpenState: controls['Force open'] || undefined,
                            })}
                                style=${styles}
                                ${listen(ToniqDropdown.events.selectChange, (event) => {
                                    const newSelected = [...state.selected];
                                    newSelected[variationIndex] = event.detail;
                                    updateState({selected: newSelected});
                                })}
                            ></${ToniqDropdown}>
                        `;
                    });
                },
            });
        });
    },
});
