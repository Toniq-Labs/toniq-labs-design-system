import {TemplateResult, css, html, listen} from 'element-vir';
import {toniqDurations} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqTooltip} from './toniq-tooltip.element';

export const ToniqWithTooltip = defineToniqElement<{
    tooltipContent: string | TemplateResult;
    forceShow?: boolean | undefined;
}>()({
    tagName: 'toniq-with-tooltip',
    hostClasses: {
        forceOn: ({inputs, state}) => !!inputs.forceShow || state.clickToggled,
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${hostClassSelectors.forceOn} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${toniqDurations.pretty};
        }

        .tooltip-wrapper {
            transition: visibility ${toniqDurations.pretty} ${toniqDurations.pretty},
                opacity ${toniqDurations.pretty};
            pointer-events: none;
            visibility: hidden;
            opacity: 0;

            padding: 8px;
            display: block;
            position: absolute;
            width: max-content;
            max-width: 200px;
            top: calc(100% - 8px);
            left: -8px;
        }
    `,
    stateInit: {
        clickToggled: false,
    },
    renderCallback({inputs, state, updateState}) {
        return html`
            <div
                class="slot-wrapper"
                ${listen('click', () => {
                    updateState({clickToggled: !state.clickToggled});
                    if (state.clickToggled) {
                        setTimeout(() => {
                            updateState({clickToggled: false});
                        }, 3000);
                    }
                })}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${ToniqTooltip}>${inputs.tooltipContent}</${ToniqTooltip}>
            </div>
        `;
    },
});
