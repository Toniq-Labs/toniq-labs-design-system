import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    ElementBookPage,
    ElementBookPageExample,
    createExample,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, html} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {Trash24Icon} from '../../icons';
import {ToniqButton} from './toniq-button.element';

const toniqButtonBookChapter = defineElementBookChapter({
    title: 'Toniq Button',
    parent: toniqElementsBookChapter,
});

function createButtonExamples(classList: string) {
    return [
        createExample({
            title: 'Text',
            render() {
                return html`
                    <${ToniqButton}
                        class=${classList}
                        ${assign(ToniqButton, {
                            text: 'Button',
                        })}
                    ></${ToniqButton}>
                `;
            },
        }),
        createExample({
            title: 'Icon',
            render() {
                return html`
                    <${ToniqButton}
                        class=${classList}
                        ${assign(ToniqButton, {
                            icon: Trash24Icon,
                        })}
                    ></${ToniqButton}>
                `;
            },
        }),
        createExample({
            title: 'Text + Icon',
            render() {
                return html`
                    <${ToniqButton}
                        class=${classList}
                        ${assign(ToniqButton, {
                            text: 'Button',
                            icon: Trash24Icon,
                        })}
                    ></${ToniqButton}>
                `;
            },
        }),
        createExample({
            title: 'HTML child',
            render() {
                return html`
                    <${ToniqButton} class=${classList} ${assign(ToniqButton, {})}>
                        <span>HTML Child</span>
                    </${ToniqButton}>
                `;
            },
        }),
        createExample({
            title: 'Sizable',
            render() {
                return html`
                    <${ToniqButton}
                        class=${classList}
                        style="height: 100px; width: 200px;"
                        ${assign(ToniqButton, {text: 'bigger'})}
                    ></${ToniqButton}>
                `;
            },
        }),
    ];
}

const toniqButtonBookPages = mapObjectValues(
    ensureType<Record<string, ElementBookPageExample[]>>({
        'toniq-button': createButtonExamples(''),
        [ToniqButton.hostClasses.secondary]: createButtonExamples(
            ToniqButton.hostClasses.secondary,
        ),
        [ToniqButton.hostClasses.outline]: createButtonExamples(ToniqButton.hostClasses.outline),
    }),
    (key, value) => {
        return defineElementBookPage({title: key, examples: value, parent: toniqButtonBookChapter});
    },
) satisfies Record<string, ElementBookPage>;

export const toniqButtonBookEntries = [
    toniqButtonBookChapter,
    ...Object.values(toniqButtonBookPages),
];
