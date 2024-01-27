import {clamp} from '@augment-vir/common';
import {css, html, nothing} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqProgress = defineToniqElement<{
    /**
     * From 0-100 inclusive. Any values outside of that range will be clamped. Fractional values are
     * accepted.
     */
    percent: number;
}>()({
    tagName: 'toniq-progress',
    cssVars: {
        'toniq-progress-width': '0%',
    },
    styles: ({cssVars}) => css`
        :host {
            position: relative;
            width: 100%;
            display: inline-block;
            background: ${toniqColors.accentSecondary.backgroundColor};
            height: 8px;
            border-radius: 16px;
            overflow: hidden;
        }
        .progress {
            position: absolute;
            height: inherit;
            border-radius: inherit;
            left: 0;
            top: 0;
            width: ${cssVars['toniq-progress-width'].value};
            background: ${toniqColors.pageInteraction.foregroundColor};
        }
    `,
    renderCallback({inputs, cssVars, host}) {
        const clampedPercent = clamp({
            value: inputs.percent,
            max: 100,
            min: 0,
        });
        const progressPercentString = `${clampedPercent}%`;
        setCssVarValue({
            forCssVar: cssVars['toniq-progress-width'],
            onElement: host,
            toValue: progressPercentString,
        });

        host.setAttribute('title', `${progressPercentString} finished`);

        if (clampedPercent) {
            return html`
                <div class="progress"></div>
            `;
        } else {
            return nothing;
        }
    },
});
