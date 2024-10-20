import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Search24Icon} from '../../icons';
import {allIconsByName, createIconPicker} from '../../icons/icon.book-helper';
import {ToniqInput, ToniqInputVariantEnum} from './toniq-input.element';

export const toniqInputPage = defineBookPage({
    title: ToniqInput.tagName,
    parent: elementsBookPage,
    controls: {
        'External value': {
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        },
        Placeholder: {
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'placeholder',
        },
        Icon: createIconPicker(Search24Icon.name),
        Suffix: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'ICP',
        }),
        'No browser helps': definePageControl({
            controlType: BookPageControlTypeEnum.Checkbox,
            initValue: false,
        }),
        'Blocked characters': definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
        'Exclusive characters': definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
    },
    elementExamplesCallback({defineExample}) {
        const sizeConfigs: ReadonlyArray<{
            customStyles?: CSSResult | undefined;
        }> = [
            {},
            {
                customStyles: css`
                    height: 75px;
                    width: 300px;
                `,
            },
            {
                customStyles: css`
                    height: 40px;
                    width: 140px;
                `,
            },
        ];

        const styleVariations: ReadonlyArray<{
            title: string;
            inputs: Partial<typeof ToniqInput.inputsType>;
        }> = [
            {
                title: 'default',
                inputs: {
                    variant: ToniqInputVariantEnum.Default,
                },
            },
            {
                title: 'outline',
                inputs: {
                    variant: ToniqInputVariantEnum.Outline,
                },
            },
            {
                title: 'disabled',
                inputs: {
                    disabled: true,
                },
            },
            {
                title: 'multi-line (textarea)',
                inputs: {
                    multiline: true,
                },
            },
        ];

        styleVariations.forEach((styleVariation) => {
            defineExample({
                title: styleVariation.title,
                stateInitStatic: {
                    value: '',
                },
                styles: css`
                    :host {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                        align-items: center;
                    }
                `,
                renderCallback({controls, state, updateState}) {
                    return sizeConfigs.map((exampleConfig) => {
                        if (
                            controls['External value'] &&
                            controls['External value'] !== state.value
                        ) {
                            updateState({
                                value: controls['External value'],
                            });
                        }

                        return html`
                            <${ToniqInput.assign({
                                ...styleVariation.inputs,
                                value: controls['External value'] || state.value,
                                icon: allIconsByName[controls.Icon],
                                placeholder: controls.Placeholder,
                                suffix: controls.Suffix,
                                disableBrowserHelps: controls['No browser helps'],
                                allowedInputs: controls['Exclusive characters'],
                                blockedInputs: controls['Blocked characters'],
                            })}
                                style=${exampleConfig.customStyles}
                                ${listen(ToniqInput.events.valueChange, (event) => {
                                    updateState({value: event.detail});
                                })}
                            ></${ToniqInput}>
                        `;
                    });
                },
            });
        });
    },
});
