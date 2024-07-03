import {Overwrite} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {Infinity24Icon} from '../../icons';
import {InfoCircle16Icon} from '../../icons/svgs/core-16/info-circle-16.icon';
import {ToniqTopTab, ToniqTopTabVariantEnum, ToniqTopTabs} from './toniq-top-tabs.element';

const examples: {
    title: string;
    inputs: Overwrite<
        typeof ToniqTopTabs.inputsType,
        {
            tabs: ReadonlyArray<string | ToniqTopTab>;
        }
    >;
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
    {
        title: 'with icon and disabled',
        extraStyles: css``,
        inputs: {
            value: 'hi',
            tabs: [
                {
                    label: 'hi',
                    value: 0,
                },
                {
                    label: '',
                    value: 1,
                    icon: Infinity24Icon,
                },
                {
                    label: 'label here',
                    value: 2,
                    icon: Infinity24Icon,
                },
                {
                    label: '',
                    value: 3,
                    icon: InfoCircle16Icon,
                    disabled: true,
                },
                {
                    label: '16px icon',
                    value: 4,
                    icon: InfoCircle16Icon,
                },
                {
                    label: 'disabled',
                    value: 5,
                    disabled: true,
                },
            ],
        },
    },
    {
        title: 'with routes',
        inputs: {
            value: 0,
            tabs: [
                {
                    label: 'hi',
                    value: 0,
                    link: {
                        url: 'https://toniqlabs.com',
                        route: {paths: []},
                    },
                },
                {
                    label: 'bye',
                    value: 1,
                    link: {
                        url: 'https://toniqlabs.com',
                        route: {paths: []},
                    },
                },
                {
                    label: 'hello',
                    value: 2,
                    link: {
                        url: 'https://toniqlabs.com',
                        route: {paths: []},
                    },
                },
                {
                    label: 'so long',
                    value: 3,
                    link: {
                        url: 'https://toniqlabs.com',
                        route: {paths: []},
                    },
                },
            ],
        },
    },
    {
        title: 'no bottom border',
        inputs: {
            value: 'hi',
            tabs: [
                'hi',
                'bye',
                'hello',
                'so long',
            ],
            variant: ToniqTopTabVariantEnum.Minimal,
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
                    const tabs = example.inputs.tabs.map((tab) => {
                        if (typeof tab === 'string') {
                            return {label: tab, value: tab};
                        } else {
                            return tab;
                        }
                    });

                    return html`
                        <${ToniqTopTabs.assign({
                            tabs,
                            value: state.selectedTab,
                            variant: example.inputs.variant,
                        })}
                            ${listen(ToniqTopTabs.events.valueChange, (event) => {
                                updateState({selectedTab: event.detail});
                            })}
                        ></${ToniqTopTabs}>
                    `;
                },
            });
        });
    },
});
