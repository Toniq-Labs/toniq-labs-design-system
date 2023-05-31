import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    DefineExampleCallback,
    ElementBookPage,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, html, listen} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {Rocket24Icon} from '../../icons';
import {ToniqToggleButton} from './toniq-toggle-button.element';

const toniqToggleButtonBookChapter = defineElementBookChapter({
    title: 'Toggle Button',
    parent: elementsBookChapter,
});

function createToggleButtonExamples(defineExample: DefineExampleCallback<{}>, classList: string) {
    return [
        defineExample({
            title: 'Default',
            stateInitStatic: {
                toggled: false,
            },
            renderCallback({state, updateState}) {
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
        defineExample({
            title: 'Icon + text',
            stateInitStatic: {
                toggled: false,
            },
            renderCallback({state, updateState}) {
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
        defineExample({
            title: 'Icon only',
            stateInitStatic: {
                toggled: false,
            },
            renderCallback({state, updateState}) {
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
    ensureType<Record<string, string>>({
        [ToniqToggleButton.tagName]: '',
        [ToniqToggleButton.hostClasses['toniq-toggle-button-text-only']]:
            ToniqToggleButton.hostClasses['toniq-toggle-button-text-only'],
    }),
    (pageTitle, className) => {
        return defineElementBookPage({
            title: pageTitle,
            defineExamplesCallback({defineExample}) {
                createToggleButtonExamples(defineExample, className);
            },
            parent: toniqToggleButtonBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqToggleButtonBookEntries = [
    toniqToggleButtonBookChapter,
    ...Object.values(toniqToggleButtonBookPages),
];
