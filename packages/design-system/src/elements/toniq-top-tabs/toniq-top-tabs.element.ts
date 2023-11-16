import {classMap, css, defineElementEvent, html, listen, testId} from 'element-vir';
import {Primitive} from 'type-fest';
import {noNativeFormStyles} from 'vira';
import {toniqDurations} from '../../styles/animation';
import {toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqBoldSpace} from '../toniq-bold-space/toniq-bold-space.element';
import {
    ToniqHyperlink,
    ToniqHyperlinkLinkTypeEnum,
} from '../toniq-hyperlink/toniq-hyperlink.element';

export type ToniqTopTab = {
    label: string;
    value: Primitive;
    /** Set this to treat the tab as a router link. */
    url?: string;
};

export const ToniqTopTabs = defineToniqElement<{
    // if text is not given, provide a child element
    tabs: ReadonlyArray<ToniqTopTab>;
    value: Primitive;
}>()({
    tagName: 'toniq-top-tabs',
    events: {
        /**
         * If a clicked tab has a url attached, then this routeChange event will be fired on click
         * rather than the valueChange event. ToniqTopTabs's value should then be deduced from the
         * URL.
         */
        routeChange: defineElementEvent<void>(),
        valueChange: defineElementEvent<Primitive>(),
    },
    cssVars: {
        'toniq-top-tabs-selected-border-width': '4px',
        'toniq-top-tabs-tab-vertical-padding': '8px',
    },
    styles: ({cssVars}) => css`
        :host {
            display: block;
        }

        ul {
            ${noNativeFormStyles};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${toniqColors.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${toniqDurations.interaction},
                border-color ${toniqDurations.interaction};
        }

        .tab {
            ${noNativeFormStyles};
            cursor: pointer;
            display: inline-block;
            ${toniqFontStyles.paragraphFont};
            padding: ${cssVars['toniq-top-tabs-tab-vertical-padding'].value} 8px;
            transition: padding-bottom ${toniqDurations.interaction};
            max-width: 300px;
        }

        ${ToniqBoldSpace} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${toniqFontStyles.boldFont};
            cursor: default;
            padding-bottom: calc(
                ${cssVars['toniq-top-tabs-tab-vertical-padding'].value} -
                    ${cssVars['toniq-top-tabs-selected-border-width'].value}
            );
        }

        li.selected {
            border-color: ${toniqColors.pageInteraction.foregroundColor};
            border-bottom-width: ${cssVars['toniq-top-tabs-selected-border-width'].value};
        }

        li:last-child {
            flex-grow: 1;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        const tabElements = inputs.tabs.map((tab) => {
            const isSelected = tab.value === inputs.value;

            return html`
                <li
                    ${testId('tab')}
                    role="presentation"
                    class=${classMap({
                        selected: isSelected,
                    })}
                >
                    <${ToniqHyperlink.assign({
                        linkType: ToniqHyperlinkLinkTypeEnum.RouteLink,
                        url: tab.url || '',
                    })}
                        class="tab"
                        role="tab"
                        title=${tab.label}
                        aria-selected=${isSelected ? 'true' : 'false'}
                        ${listen('click', (event) => {
                            /** If the current tab is already selected, then there is nothing to do. */
                            if (isSelected) {
                                event.preventDefault();
                                return;
                            }

                            if (tab.url) {
                                dispatch(new events.routeChange());
                            } else {
                                /**
                                 * If there is no route URL then we don't want the hyperlink to do
                                 * anything.
                                 */
                                event.preventDefault();
                                dispatch(new events.valueChange(tab.value));
                            }
                        })}
                    >
                        <${ToniqBoldSpace.assign({text: tab.label})}></${ToniqBoldSpace}>
                    </${ToniqHyperlink}>
                </li>
            `;
        });

        return html`
            <ul role="tablist">
                ${tabElements}
                <li></li>
            </ul>
        `;
    },
});
