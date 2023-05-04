import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {ArrowsSort24Icon} from '../../icons';
import {toniqColorCssVarNames} from '../../styles';
import {ToniqDropdown, ToniqDropdownOption} from './toniq-dropdown.element';

const toniqDropdownChapter = defineElementBookChapter({
    title: 'Toniq Dropdown',
    parent: toniqElementsBookChapter,
});

const exampleDropdownOptions: ReadonlyArray<ToniqDropdownOption> = [
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
];

const toniqDropdownPage = defineElementBookPage({
    title: ToniqDropdown.tagName,
    parent: toniqDropdownChapter,
    examples: [
        createExample({
            title: 'Default',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'With Icon',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                            icon: ArrowsSort24Icon,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'With Icon + Prefix',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                            icon: ArrowsSort24Icon,
                            selectedLabelPrefix: 'Sort By:',
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'Defaulted to an option',
            stateInit: {
                selected: exampleDropdownOptions[3],
            },
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'Custom size',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            styles: css`
                ${ToniqDropdown} {
                    width: 500px;
                    height: 100px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'Squished',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            styles: css`
                ${ToniqDropdown} {
                    max-height: 20px;
                    min-height: 20px;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
        createExample({
            title: 'No background',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            styles: css`
                ${ToniqDropdown} {
                    ${toniqColorCssVarNames.accentSecondary.backgroundColor}: transparent;
                }
            `,
            render({state, updateState}) {
                return html`
                    <${ToniqDropdown}
                        ${assign(ToniqDropdown, {
                            options: exampleDropdownOptions,
                            selected: state.selected,
                        })}
                        ${listen(ToniqDropdown.events.selectChange, (event) => {
                            updateState({selected: event.detail});
                        })}
                    ></${ToniqDropdown}>
                `;
            },
        }),
    ],
});

export const toniqDropdownBookEntries = [
    toniqDropdownChapter,
    toniqDropdownPage,
];
