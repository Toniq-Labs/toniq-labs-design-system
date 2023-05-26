import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ArrowsSort24Icon} from '../../icons';
import {toniqColorCssVarNames} from '../../styles';
import {ToniqDropdown, ToniqDropdownOption} from './toniq-dropdown.element';

const toniqDropdownChapter = defineElementBookChapter({
    title: 'Dropdown',
    parent: elementsBookChapter,
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
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'Default',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'With Icon',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'With Icon + Prefix',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'Defaulted to an option',
            stateInit: {
                selected: exampleDropdownOptions[3],
            },
            renderCallback({state, updateState}) {
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
        });
        defineExample({
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
            renderCallback({state, updateState}) {
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
        });
        defineExample({
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
            renderCallback({state, updateState}) {
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
        });
        defineExample({
            title: 'No background',
            stateInit: {
                selected: undefined as ToniqDropdownOption | undefined,
            },
            styles: css`
                ${ToniqDropdown} {
                    ${toniqColorCssVarNames.accentSecondary.backgroundColor}: transparent;
                }
            `,
            renderCallback({state, updateState}) {
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
        });
    },
});

export const toniqDropdownBookEntries = [
    toniqDropdownChapter,
    toniqDropdownPage,
];
