import {classMap, css, defineElementEvent, html, listen, testId} from 'element-vir';
import {FullRoute, shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {Primitive} from 'type-fest';
import {noNativeFormStyles, noNativeSpacing} from 'vira';
import {ToniqSvg} from '../../icons';
import {toniqDurations} from '../../styles/animation';
import {toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqBoldSpace} from '../toniq-bold-space/toniq-bold-space.element';
import {
    ToniqHyperlink,
    ToniqHyperlinkLinkTypeEnum,
} from '../toniq-hyperlink/toniq-hyperlink.element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export type ToniqTopTab = Readonly<{
    label: string;
    value: Primitive;
    icon?: ToniqSvg;
    /** Set this to treat the tab as a router link. */
    link?: {
        route: FullRoute;
        url: string | URL;
    };
    disabled?: undefined | boolean;
}>;

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
        routeChange: defineElementEvent<NonNullable<ToniqTopTab['link']>['route']>(),
        valueChange: defineElementEvent<ToniqTopTab['value']>(),
    },
    cssVars: {
        'toniq-top-tabs-selected-border-width': '4px',
        'toniq-top-tabs-tab-vertical-padding': '18px',
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
            display: flex;
            align-items: center;
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${toniqColors.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${toniqDurations.interaction},
                border-color ${toniqDurations.interaction},
                padding-bottom ${toniqDurations.interaction};
            padding: 4px 4px ${cssVars['toniq-top-tabs-tab-vertical-padding'].value};
        }

        .tab {
            ${noNativeFormStyles};
            ${noNativeSpacing};
            cursor: pointer;
            display: inline-block;
            ${toniqFontStyles.paragraphFont};
            max-width: 300px;
        }

        .tab-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .disabled-tab {
            pointer-events: none;
        }

        ${ToniqBoldSpace} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${toniqFontStyles.boldFont};
            color: ${toniqColors.pageInteraction.foregroundColor};
            cursor: default;
        }

        li.selected {
            border-color: ${toniqColors.pageInteraction.foregroundColor};
            border-bottom-width: ${cssVars['toniq-top-tabs-selected-border-width'].value};
            padding-bottom: calc(
                calc(
                        ${cssVars['toniq-top-tabs-tab-vertical-padding'].value} -
                            ${cssVars['toniq-top-tabs-selected-border-width'].value}
                    ) + 1px
            );
        }

        li:last-child {
            flex-grow: 1;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        const tabElements = inputs.tabs.map((tab) => {
            const isSelected = tab.value === inputs.value;
            const tabIconTemplate = tab.icon
                ? html`
                      <${ToniqIcon.assign({icon: tab.icon})}></${ToniqIcon}>
                  `
                : '';

            const tabTextTemplate = tab.label
                ? html`
                      <${ToniqBoldSpace.assign({
                          text: tab.label,
                      })}></${ToniqBoldSpace}>
                  `
                : '';

            return html`
                <li
                    ${testId('tab')}
                    role="presentation"
                    class=${classMap({
                        selected: isSelected,
                    })}
                >
                    <${ToniqHyperlink.assign({
                        url: tab.link?.url || '',
                        linkType: ToniqHyperlinkLinkTypeEnum.RouteLink,
                    })}
                        class="tab ${classMap({'disabled-tab': !!tab.disabled})}"
                        role="tab"
                        title=${tab.label}
                        aria-selected=${isSelected ? 'true' : 'false'}
                        ${listen('click', (clickEvent) => {
                            /** If the current tab is already selected, then there is nothing to do. */
                            if (isSelected) {
                                return;
                            }
                            if (shouldMouseEventTriggerRoutes(clickEvent)) {
                                if (tab.link?.route) {
                                    dispatch(new events.routeChange(tab.link.route));
                                }
                                dispatch(new events.valueChange(tab.value));
                            }
                        })}
                    >
                        <div class="tab-content">${tabIconTemplate} ${tabTextTemplate}</div>
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
