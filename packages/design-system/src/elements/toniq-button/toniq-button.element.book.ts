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
import {ToniqButton, ToniqButtonStyleEnum} from './toniq-button.element';

const toniqButtonBookChapter = defineElementBookChapter({
    title: 'Button',
    parent: elementsBookChapter,
});

function createButtonExamples(
    defineExample: DefineExampleCallback<{}>,
    inputOverrides: (typeof ToniqButton)['inputsType'],
) {
    defineExample({
        title: 'Text',
        renderCallback() {
            return html`
                <${ToniqButton}
                    ${assign(ToniqButton, {
                        text: 'Button',
                        ...inputOverrides,
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
                    ${assign(ToniqButton, {
                        icon: Trash24Icon,
                        ...inputOverrides,
                    })}
                ></${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'Toggling icon',
        stateInitStatic: {
            showIcon: true,
        },
        renderCallback({state, updateState}) {
            setTimeout(() => {
                updateState({showIcon: !state.showIcon});
            }, 1000);

            return html`
                <${ToniqButton}
                    ${assign(
                        ToniqButton,
                        state.showIcon
                            ? {
                                  icon: Trash24Icon,
                                  text: 'icon',
                                  ...inputOverrides,
                              }
                            : {
                                  text: 'no icon',
                                  ...inputOverrides,
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
                    ${assign(ToniqButton, {
                        text: 'Button',
                        icon: Trash24Icon,
                        ...inputOverrides,
                    })}
                ></${ToniqButton}>
            `;
        },
    });
    defineExample({
        title: 'HTML child',
        renderCallback() {
            return html`
                <${ToniqButton}
                    ${assign(ToniqButton, {
                        ...inputOverrides,
                    })}
                >
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
                    style="height: 100px; width: 200px;"
                    ${assign(ToniqButton, {text: 'bigger', ...inputOverrides})}
                ></${ToniqButton}>
            `;
        },
    });
}

const toniqButtonBookPages = mapObjectValues(
    ensureType<Record<string, (typeof ToniqButton)['inputsType']>>({
        [ToniqButton.tagName]: {},
        [`${ToniqButton.tagName} Secondary`]: {
            buttonStyle: ToniqButtonStyleEnum.Secondary,
        },
        [`${ToniqButton.tagName} Outline`]: {
            buttonStyle: ToniqButtonStyleEnum.Outline,
        },
        [`${ToniqButton.tagName} Disabled`]: {disabled: true},
    }),
    (pageTitle, inputOverrides) => {
        return defineElementBookPage({
            title: pageTitle,
            defineExamplesCallback({defineExample}) {
                createButtonExamples(defineExample, inputOverrides);
            },
            parent: toniqButtonBookChapter,
        });
    },
) satisfies Record<string, ElementBookPage>;

export const toniqButtonBookEntries = [
    toniqButtonBookChapter,
    ...Object.values(toniqButtonBookPages),
];
