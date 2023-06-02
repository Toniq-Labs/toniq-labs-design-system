import {css, defineElementEvent, html, listen} from 'element-vir';
import {shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqHyperlink = defineToniqElement<{
    newTab: boolean;
    url: string;
    withHoverStyles?: boolean | undefined;
    /**
     * When set to true, the anchor link won't trigger on a normal click. Instead, you are expected
     * to listen to click events in order to trigger a route update.
     */
    treatAsRouteChange?: boolean | undefined;
    scrollToTop?: boolean | undefined;
}>()({
    tagName: 'toniq-hyperlink',
    hostClasses: {
        'toniq-hyperlink-with-hover-styles': ({inputs}) => !!inputs.withHoverStyles,
    },
    events: {
        routeChangeTriggered: defineElementEvent<void>(),
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
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
    `,
    renderCallback({inputs, dispatch, events}) {
        function clickCallback(clickEvent: MouseEvent) {
            if (!inputs.treatAsRouteChange) {
                return;
            }

            if (shouldMouseEventTriggerRoutes(clickEvent)) {
                clickEvent.preventDefault();
                if (inputs.scrollToTop) {
                    window.scrollTo(0, 0);
                }
                dispatch(new events.routeChangeTriggered());
            }
        }

        if (inputs.newTab) {
            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a
                    href=${inputs.url}
                    ${listen('click', clickCallback)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <slot></slot>
                </a>
            `;
        } else {
            return html`
                <a href=${inputs.url} ${listen('click', clickCallback)}><slot></slot></a>
            `;
        }
    },
});
