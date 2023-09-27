import {css, html} from 'element-vir';
import {LoaderAnimated24Icon} from '../../icons';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export enum ToniqLoadingSizeEnum {
    Small = 'small',
    Large = 'large',
    WholePage = 'whole-page',
}

export const ToniqLoading = defineToniqElement<{size: ToniqLoadingSizeEnum}>()({
    tagName: 'toniq-loading',
    hostClasses: {
        'toniq-loading-large': ({inputs}) => inputs.size === ToniqLoadingSizeEnum.Large,
        'toniq-loading-whole-page': ({inputs}) => inputs.size === ToniqLoadingSizeEnum.WholePage,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
        }

        ${hostClasses['toniq-loading-large'].selector} {
            width: 36px;
            height: 36px;
        }
        ${hostClasses['toniq-loading-whole-page'].selector} {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 100%;
            height: 500px;
        }

        ${hostClasses['toniq-loading-whole-page'].selector} ${ToniqIcon} {
            width: 48px;
            height: 48px;
        }

        ${hostClasses['toniq-loading-large'].selector} ${ToniqIcon} {
            width: inherit;
            height: inherit;
        }
    `,
    renderCallback: ({inputs}) => {
        return html`
            <${ToniqIcon.assign({
                icon: LoaderAnimated24Icon,
                fitContainer: inputs.size !== ToniqLoadingSizeEnum.Small,
            })}></${ToniqIcon}>
        `;
    },
});
