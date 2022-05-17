import {css} from 'element-vir';
import {transitionCssVarNames} from './css-vars-names';

/**
 * This duration should be very short to ensure snappy responses to user interactions.
 *
 * A duration of 84ms gives us 5 frames on a 60Hz screen.
 */
export const interactionDuration = css`var(${transitionCssVarNames.interactionDuration}, 84ms)`;
