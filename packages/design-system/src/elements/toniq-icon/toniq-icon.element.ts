import {css} from 'element-vir';
import {ReadonlyDeep} from 'type-fest';
import {ToniqSvg} from '../../icons/toniq-svg';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqIcon = defineToniqElement<{icon?: ReadonlyDeep<ToniqSvg> | undefined}>()({
    tagName: 'toniq-icon',
    hostClasses: {
        'toniq-icon-fit-icon': false,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: block;
        }
        svg {
            /*
                svg elements are set to inline by default which gives it space under the image. So 
                we're changing it to block here.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClasses['toniq-icon-fit-icon'].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback({inputs}) {
        return inputs.icon ? inputs.icon.svgTemplate : '';
    },
});
