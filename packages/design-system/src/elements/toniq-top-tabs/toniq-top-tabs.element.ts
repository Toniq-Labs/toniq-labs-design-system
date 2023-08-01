import {classMap, css, defineElementEvent, html, listen, testId} from 'element-vir';
import {removeNativeFormStyles, toniqColors, toniqDurations, toniqFontStyles} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqBoldSpace} from '../toniq-bold-space/toniq-bold-space.element';

export const ToniqTopTabs = defineToniqElement<{
    // if text is not given, provide a child element
    tabs: ReadonlyArray<string>;
    selectedTab: string;
}>()({
    tagName: 'toniq-top-tabs',
    events: {
        selectedTabChange: defineElementEvent<string>(),
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
            ${removeNativeFormStyles};
            display: flex;
            width: 100%;
        }

        li {
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${toniqColors.pageTertiary.foregroundColor};
            transition: border-bottom-width ${toniqDurations.interaction},
                border-color ${toniqDurations.interaction};
        }

        button {
            ${removeNativeFormStyles};
            cursor: pointer;
            ${toniqFontStyles.paragraphFont};
            padding: ${cssVars['toniq-top-tabs-tab-vertical-padding'].value} 8px;
            transition: padding-bottom ${toniqDurations.interaction};
        }

        button {
            max-width: 300px;
        }

        ${ToniqBoldSpace} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected button {
            ${toniqFontStyles.boldFont};
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
        return html`
            <ul role="tablist">
                ${inputs.tabs.map((tab) => {
                    const isSelected = tab === inputs.selectedTab;

                    return html`
                        <li
                            ${testId('tab')}
                            role="presentation"
                            class=${classMap({
                                selected: isSelected,
                            })}
                        >
                            <button
                                role="tab"
                                title=${tab}
                                aria-selected=${isSelected ? 'true' : 'false'}
                                ${listen('click', () => {
                                    if (inputs.selectedTab !== tab) {
                                        dispatch(new events.selectedTabChange(tab));
                                    }
                                })}
                            >
                                <${ToniqBoldSpace.assign({text: tab})}></${ToniqBoldSpace}>
                            </button>
                        </li>
                    `;
                })}
                <li></li>
                <li></li>
            </ul>
        `;
    },
});
