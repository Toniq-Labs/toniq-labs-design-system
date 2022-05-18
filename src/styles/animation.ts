import {css} from 'element-vir';

export const animationCssVarNames = {
    interactionDuration: css`--toniq-interaction-transition-duration`,
} as const;

/**
 * This duration should be very short to ensure snappy responses to user interactions.
 *
 * A duration of 84ms gives us 5 frames on a 60Hz screen.
 */
export const interactionDuration = css`var(${animationCssVarNames.interactionDuration}, 84ms)`;
