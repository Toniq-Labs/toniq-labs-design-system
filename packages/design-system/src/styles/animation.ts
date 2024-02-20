import {css} from 'element-vir';

export const durationCssVarNames = {
    interactionDuration: css`--toniq-interaction-transition-duration`,
    prettyDuration: css`--toniq-pretty-transition-duration`,
} as const;

export const toniqDurations = {
    /**
     * This duration should be very short to ensure snappy responses to user interactions.
     *
     * A duration of 84ms gives us 5 frames on a 60Hz screen.
     */
    interaction: css`var(${durationCssVarNames.interactionDuration}, 84ms)`,
    /** A longer duration to emphasize the animation. */
    pretty: css`var(${durationCssVarNames.prettyDuration}, 300ms)`,
};
