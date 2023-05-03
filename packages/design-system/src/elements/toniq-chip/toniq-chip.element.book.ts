import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    ElementBookPage,
    ElementBookPageExample,
    createExample,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, css, html} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {InfoCircle16Icon} from '../../icons';
import {ToniqChip} from './toniq-chip.element';

const toniqChipBookChapter = defineElementBookChapter({
    title: 'Toniq Chip',
    parent: toniqElementsBookChapter,
});

function createChipExamples(classList: string) {
    return [
        createExample({
            title: 'Text',
            render() {
                return html`
                    <${ToniqChip}
                        class=${classList}
                        ${assign(ToniqChip, {
                            text: 'Toniq Chip Text',
                        })}
                    ></${ToniqChip}>
                `;
            },
        }),
        createExample({
            title: 'Text + Icon',
            render() {
                return html`
                    <${ToniqChip}
                        class=${classList}
                        ${assign(ToniqChip, {
                            text: 'Toniq Chip Text',
                            icon: InfoCircle16Icon,
                        })}
                    ></${ToniqChip}>
                `;
            },
        }),
        createExample({
            title: 'HTML Child',
            render() {
                return html`
                    <${ToniqChip} class=${classList} ${assign(ToniqChip, {})}>
                        Slot in Use
                    </${ToniqChip}>
                `;
            },
        }),
        createExample({
            title: 'HTML + Icon',
            render() {
                return html`
                    <${ToniqChip}
                        class=${classList}
                        ${assign(ToniqChip, {
                            icon: InfoCircle16Icon,
                        })}
                    >
                        Slot in Use
                    </${ToniqChip}>
                `;
            },
        }),
        createExample({
            title: 'custom size',
            styles: css`
                ${ToniqChip} {
                    width: 150px;
                    height: 24px;
                }
            `,
            render() {
                return html`
                    <${ToniqChip}
                        class=${classList}
                        ${assign(ToniqChip, {
                            icon: InfoCircle16Icon,
                        })}
                    >
                        Slot in Use
                    </${ToniqChip}>
                `;
            },
        }),
    ];
}

const toniqChipBookPages = mapObjectValues(
    ensureType<Record<string, ElementBookPageExample[]>>({
        'toniq-chip': createChipExamples(''),
        [ToniqChip.hostClasses.secondary]: createChipExamples(ToniqChip.hostClasses.secondary),
    }),
    (key, value) => {
        return defineElementBookPage({title: key, examples: value, parent: toniqChipBookChapter});
    },
) satisfies Record<string, ElementBookPage>;

export const toniqChipBookEntries = [
    toniqChipBookChapter,
    ...Object.values(toniqChipBookPages),
];
