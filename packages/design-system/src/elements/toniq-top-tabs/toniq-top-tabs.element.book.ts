import {Overwrite} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqTopTabs} from './toniq-top-tabs.element';

const examples: {
    title: string;
    inputs: Overwrite<typeof ToniqTopTabs.inputsType, {tabs: ReadonlyArray<string>}>;
    extraStyles?: CSSResult | undefined;
}[] = [
    {
        title: 'basic',
        inputs: {
            value: 'hi',
            tabs: [
                'hi',
                'bye',
                'hello',
                'so long',
            ],
        },
    },
    {
        title: 'wide parent',
        extraStyles: css`
            :host {
                width: 500px;
            }

            ${ToniqTopTabs} {
                width: 100%;
            }
        `,
        inputs: {
            value: 'hi',
            tabs: [
                'hi',
                'bye',
                'hello',
                'so long',
            ],
        },
    },
    {
        title: 'really long tab',
        extraStyles: css``,
        inputs: {
            value: 'hi',
            tabs: [
                'hi',
                'bye',
                'hello',
                'So long, farewell, auf Wiedersehen, adieu. Adieu, adieu, to you and you and you',
            ],
        },
    },
];

export const toniqTopTabsPage = defineBookPage({
    title: ToniqTopTabs.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                stateInitStatic: {
                    selectedTab: example.inputs.value,
                },
                styles: css`
                    ${example.extraStyles ?? css``}
                `,
                renderCallback({state, updateState}) {
                    return html`
                        <${ToniqTopTabs.assign({
                            tabs: example.inputs.tabs.map((tab) => {
                                return {label: tab, value: tab};
                            }),
                            value: state.selectedTab,
                        })}
                            ${listen(ToniqTopTabs.events.valueChange, (event) => {
                                console.log(event);
                                updateState({selectedTab: event.detail});
                            })}
                        ></${ToniqTopTabs}>
                    `;
                },
            });
        });
    },
});
