import {css} from 'element-vir';
import {unsafeCSS} from 'lit';
import {toniqColors} from './colors';

/** This should be placed in an ::after selector */
export const focusStyles = css`
    --outline-width: 3px;
    --outline-gap: 2px;
    --outline-spacing: calc(var(--outline-width) + var(--outline-gap) + var(--border-size));
    content: '';
    top: calc(var(--outline-spacing) * -1);
    left: calc(var(--outline-spacing) * -1);
    position: absolute;
    width: calc(100% + calc(var(--outline-spacing) * 2));
    height: calc(100% + calc(var(--outline-spacing) * 2));
    box-sizing: border-box;
    border: var(--outline-width) solid ${toniqColors.pagePrimary.foregroundColor};
    border-radius: 12px;
    z-index: 100;
`;
export function createFocusStyles(
    mainSelector: string,
    /**
     * ElementBorderSize here is used to fix the outline when the element these styles are attached
     * to has a border. The dev must specific that border size here for the offsets to be calculated
     * correctly.
     */
    elementBorderSize: number,
) {
    return css`
        ${unsafeCSS(mainSelector)}::after {
            --border-size: ${elementBorderSize}px;
            ${focusStyles}
        }
    `;
}
