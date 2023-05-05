import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    ElementBookPage,
    ElementBookPageExample,
    createExample,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, html, listen} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {Rocket24Icon} from '../../icons';
import {ToniqToggleButton} from './toniq-toggle-button.element';

const toniqToggleButtonBookChapter = defineElementBookChapter({
    title: 'Toniq Toggle Button',
    parent: toniqElementsBookChapter,
});

function createToggleButtonExamples(classList: string) {
    return [
        createExample({
            title: 'Default',
            stateInit: {
                toggled: false,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqToggleButton}
                        class=${classList}
                        ${assign(ToniqToggleButton, {
                            toggled: state.toggled,
                            text: 'Toggle Button',
                        })}
                        ${listen('click', () => {
                            updateState({toggled: !state.toggled});
                        })}
                    ></${ToniqToggleButton}>
                `;
            },
        }),
        createExample({
            title: 'Icon + text',
            stateInit: {
                toggled: false,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqToggleButton}
                        class=${classList}
                        ${assign(ToniqToggleButton, {
                            toggled: state.toggled,
                            icon: Rocket24Icon,
                            text: 'Toggle Button',
                        })}
                        ${listen('click', () => {
                            updateState({toggled: !state.toggled});
                        })}
                    ></${ToniqToggleButton}>
                `;
            },
        }),
        createExample({
            title: 'Icon only',
            stateInit: {
                toggled: false,
            },
            render({state, updateState}) {
                return html`
                    <${ToniqToggleButton}
                        class=${classList}
                        ${assign(ToniqToggleButton, {
                            toggled: state.toggled,
                            icon: Rocket24Icon,
                        })}
                        ${listen('click', () => {
                            updateState({toggled: !state.toggled});
                        })}
                    ></${ToniqToggleButton}>
                `;
            },
        }),
    ];
}

const toniqToggleButtonBookPages = mapObjectValues(
    ensureType<Record<string, ReadonlyArray<ElementBookPageExample<any>>>>({
        [ToniqToggleButton.tagName]: createToggleButtonExamples(''),
        [ToniqToggleButton.hostClasses.textOnly]: createToggleButtonExamples(
            ToniqToggleButton.hostClasses.textOnly,
        ),
    }),
    (key, value) => {
        return defineElementBookPage({
            title: key,
            examples: value,
            parent: toniqToggleButtonBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqToggleButtonBookEntries = [
    toniqToggleButtonBookChapter,
    ...Object.values(toniqToggleButtonBookPages),
];
