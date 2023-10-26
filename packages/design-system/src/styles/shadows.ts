import {CSSResult, css, unsafeCSS} from 'element-vir';
import {toniqColors} from './colors';

export const toniqShadows = {
    popupShadow: css`
        filter: drop-shadow(0px 12px 8px ${toniqColors.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,
    popupShadowReversed: css`
        filter: drop-shadow(0px -12px 8px ${toniqColors.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,
    menuShadow: css`
        filter: drop-shadow(0px 12px 8px ${toniqColors.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,
} as const satisfies Record<string, CSSResult>;

export function makeDropShadowCardStyles(selector: string, allowHover = true) {
    const cssSelector = unsafeCSS(selector);
    const hoverSelector =
        selector === ':host'
            ? css`
                  :host(:hover);
              `
            : css`
                  ${cssSelector}:hover
              `;

    const hoverStyles = allowHover
        ? css`
              ${cssSelector} {
                  cursor: pointer;
              }
              ${hoverSelector} {
                  border-color: ${toniqColors.pageInteraction.foregroundColor};
              }
          `
        : css``;

    return css`
        ${cssSelector} {
            border-radius: 16px;
            background-color: ${toniqColors.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${toniqShadows.popupShadow};
        }

        ${hoverStyles}
    `;
}
