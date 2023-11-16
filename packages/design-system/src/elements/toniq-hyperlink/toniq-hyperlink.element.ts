import {css, defineElementEvent, html, ifDefined, listen} from 'element-vir';
import {shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export enum ToniqHyperlinkLinkTypeEnum {
    /**
     * Default link behavior. Won't try to open in a new tab and will instead redirect the current
     * page.
     */
    ReplacePage = 'replace-page',
    /** Tries to open hyperlinks in new tabs. */
    NewTab = 'new-tab',
    /**
     * Treats the link as a route link. Emits a routeChange event and doesn't automatically redirect
     * the page. Right click or ctrl+click link behaviors still work.
     */
    RouteLink = 'route-link',
    /** The link is disabled entirely. */
    Disabled = 'disabled',
}

export const ToniqHyperlink = defineToniqElement<{
    url: string;
    linkType: ToniqHyperlinkLinkTypeEnum;
    withHoverStyles?: boolean | undefined;
    /**
     * Only relevant for linkType of ToniqHyperlinkLinkTypeEnum.RouteLink. Setting this to true will
     * cause the page to scroll all the way up immediately before the routeChange event is
     * triggered.
     */
    scrollToTop?: boolean | undefined;
}>()({
    tagName: 'toniq-hyperlink',
    hostClasses: {
        'toniq-hyperlink-with-hover-styles': ({inputs}) => !!inputs.withHoverStyles,
        'toniq-hyperlink-link-disabled': ({inputs}) =>
            inputs.linkType === ToniqHyperlinkLinkTypeEnum.Disabled,
    },
    events: {
        routeChange: defineElementEvent<void>(),
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline;
            text-decoration: underline;
            cursor: pointer;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            cursor: inherit;
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${hostClasses['toniq-hyperlink-with-hover-styles'].selector}:hover a, ${hostClasses[
            'toniq-hyperlink-with-hover-styles'
        ].selector} a:hover {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        ${hostClasses['toniq-hyperlink-with-hover-styles'].selector}:active a, ${hostClasses[
            'toniq-hyperlink-with-hover-styles'
        ].selector} a:active {
            color: ${toniqColors.pageInteractionActive.foregroundColor};
        }

        ${hostClasses['toniq-hyperlink-link-disabled'].selector} {
            cursor: default;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        function clickCallback(clickEvent: MouseEvent) {
            if (inputs.linkType === ToniqHyperlinkLinkTypeEnum.Disabled) {
                clickEvent.preventDefault();
                return;
            }

            /** If the link it's a route, there's nothing more to do here. */
            if (inputs.linkType !== ToniqHyperlinkLinkTypeEnum.RouteLink) {
                return;
            }

            if (shouldMouseEventTriggerRoutes(clickEvent)) {
                clickEvent.preventDefault();
                if (inputs.scrollToTop) {
                    window.scrollTo(0, 0);
                }
                dispatch(new events.routeChange());
            }
        }

        const shouldUseNewTab = inputs.linkType === ToniqHyperlinkLinkTypeEnum.NewTab;

        return html`
            <a
                href=${inputs.url}
                ${listen('click', clickCallback)}
                target=${ifDefined(shouldUseNewTab ? '_blank' : undefined)}
                rel=${ifDefined(
                    shouldUseNewTab
                        ? /** Noopener and noreferrer are needed for security reasons, do not remove! */
                          'noopener noreferrer'
                        : undefined,
                )}
            >
                <slot></slot>
            </a>
        `;
    },
});
