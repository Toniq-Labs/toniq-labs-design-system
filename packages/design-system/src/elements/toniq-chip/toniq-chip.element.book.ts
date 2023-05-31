import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    DefineExampleCallback,
    ElementBookPage,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, css, html} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {InfoCircle16Icon} from '../../icons';
import {ToniqChip} from './toniq-chip.element';

const toniqChipBookChapter = defineElementBookChapter({
    title: 'Chip',
    parent: elementsBookChapter,
});

function createChipExamples(defineExample: DefineExampleCallback<{}>, classList: string) {
    defineExample({
        title: 'Text',
        renderCallback() {
            return html`
                <${ToniqChip}
                    class=${classList}
                    ${assign(ToniqChip, {
                        text: 'Toniq Chip Text',
                    })}
                ></${ToniqChip}>
            `;
        },
    });
    defineExample({
        title: 'Text + Icon',
        renderCallback() {
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
    });
    defineExample({
        title: 'HTML Child',
        renderCallback() {
            return html`
                <${ToniqChip} class=${classList} ${assign(ToniqChip, {})}>Slot in Use</${ToniqChip}>
            `;
        },
    });
    defineExample({
        title: 'HTML + Icon',
        renderCallback() {
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
    });
    defineExample({
        title: 'custom size',
        styles: css`
            ${ToniqChip} {
                width: 150px;
                height: 24px;
            }
        `,
        renderCallback() {
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
    });
}

const toniqChipBookPages = mapObjectValues(
    ensureType<Record<string, string>>({
        [ToniqChip.tagName]: '',
        [ToniqChip.hostClasses['toniq-chip-secondary']]:
            ToniqChip.hostClasses['toniq-chip-secondary'],
    }),
    (key, className) => {
        return defineElementBookPage({
            title: key,
            defineExamplesCallback({defineExample}) {
                createChipExamples(defineExample, className);
            },
            parent: toniqChipBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqChipBookEntries = [
    toniqChipBookChapter,
    ...Object.values(toniqChipBookPages),
];
