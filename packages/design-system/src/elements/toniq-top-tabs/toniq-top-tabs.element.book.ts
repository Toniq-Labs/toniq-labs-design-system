import {defineBookPage} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqTopTabs} from './toniq-top-tabs.element';

const examples: {
    title: string;
    inputs: typeof ToniqTopTabs.inputsType;
    extraStyles?: CSSResult | undefined;
}[] = [
    {
        title: 'basic',
        inputs: {
            selectedTab: 'hi',
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
            selectedTab: 'hi',
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
            selectedTab: 'hi',
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
                    selectedTab: example.inputs.selectedTab,
                },
                styles: css`
                    ${example.extraStyles ?? css``}
                `,
                renderCallback({state, updateState}) {
                    return html`
                        <${ToniqTopTabs.assign({
                            ...example.inputs,
                            selectedTab: state.selectedTab,
                        })}
                            ${listen(ToniqTopTabs.events.selectedTabChange, (event) => {
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
