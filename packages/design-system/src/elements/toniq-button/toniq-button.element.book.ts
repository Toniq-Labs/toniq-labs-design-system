import {ensureType, mapObjectValues} from '@augment-vir/common';
import {
    DefineExampleCallback,
    ElementBookPage,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {assign, html} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {Trash24Icon} from '../../icons';
import {ToniqButton} from './toniq-button.element';

const toniqButtonBookChapter = defineElementBookChapter({
    title: 'Button',
    parent: elementsBookChapter,
});

function createButtonExamples(defineExample: DefineExampleCallback<{}>, classList: string) {
    defineExample({
        title: 'Text',
        renderCallback() {
            return html`
                <${ToniqButton}
                    class=${classList}
                    ${assign(ToniqButton, {
                        text: 'Button',
                    })}
                ></${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'Icon',
        renderCallback() {
            return html`
                <${ToniqButton}
                    class=${classList}
                    ${assign(ToniqButton, {
                        icon: Trash24Icon,
                    })}
                ></${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'Toggling icon',
        stateInit: {
            showIcon: true,
        },
        renderCallback({state, updateState}) {
            setTimeout(() => {
                updateState({showIcon: !state.showIcon});
            }, 1000);

            return html`
                <${ToniqButton}
                    class=${classList}
                    ${assign(
                        ToniqButton,
                        state.showIcon
                            ? {
                                  icon: Trash24Icon,
                                  text: 'icon',
                              }
                            : {
                                  text: 'no icon',
                              },
                    )}
                ></${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'Text + Icon',
        renderCallback() {
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
    });
    defineExample({
        title: 'HTML child',
        renderCallback() {
            return html`
                <${ToniqButton} class=${classList} ${assign(ToniqButton, {})}>
                    <span>HTML Child</span>
                </${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'Sizable',
        renderCallback() {
            return html`
                <${ToniqButton}
                    class=${classList}
                    style="height: 100px; width: 200px;"
                    ${assign(ToniqButton, {text: 'bigger'})}
                ></${ToniqButton}>
            `;
        },
    });
}

const toniqButtonBookPages = mapObjectValues(
    ensureType<Record<string, string>>({
        [ToniqButton.tagName]: '',
        [ToniqButton.hostClasses.secondary]: ToniqButton.hostClasses.secondary,
        [ToniqButton.hostClasses.outline]: ToniqButton.hostClasses.outline,
        [ToniqButton.hostClasses.disabled]: ToniqButton.hostClasses.disabled,
    }),
    (pageTitle, hostClass) => {
        return defineElementBookPage({
            title: pageTitle,
            defineExamplesCallback({defineExample}) {
                createButtonExamples(defineExample, hostClass);
            },
            parent: toniqButtonBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqButtonBookEntries = [
    toniqButtonBookChapter,
    ...Object.values(toniqButtonBookPages),
];
