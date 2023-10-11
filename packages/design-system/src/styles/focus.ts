import {css, unsafeCSS} from 'element-vir';
import {toPixel} from '../augments/number';
import {toniqColors} from './colors';

/**
 * Create styles that look like an outline for the given selector.
 *
 * It is recommended to use the pseudo selectors ":focus:focus-visible:not(:active)" to preventing
 * clicking from creating focus styles in Chrome.
 */
export function createFocusStyles({
    mainSelector,
    elementBorderSize,
    outlineGap = 2,
    outlineWidth = 3,
}: {
    mainSelector: string;
    /**
     * ElementBorderSize here is used to fix the outline when the element these styles are attached
     * to has a border. The dev must specify that border size here for the offsets to be calculated
     * correctly.
     */
    elementBorderSize: number;
    outlineGap?: number;
    outlineWidth?: number;
}) {
    const outlineSpacing = unsafeCSS(toPixel(outlineWidth + outlineGap + elementBorderSize));

    return css`
        ${unsafeCSS(mainSelector)}::after {
            content: '';
            top: calc(${outlineSpacing} * -1);
            left: calc(${outlineSpacing} * -1);
            position: absolute;
            width: calc(100% + calc(${outlineSpacing} * 2));
            height: calc(100% + calc(${outlineSpacing} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${outlineWidth}px solid ${toniqColors.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `;
}
