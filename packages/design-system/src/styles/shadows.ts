import {css} from 'element-vir';
import {CSSResult} from 'lit';
import {wrapTypeWithReadonly} from '../augments/type';
import {toniqColors} from './colors';

export const toniqShadows = wrapTypeWithReadonly<Record<string, CSSResult>>()({
    popupShadow: css`
        filter: drop-shadow(0px 12px 8px ${toniqColors.dropShadow.backgroundColor});
    `,
});
