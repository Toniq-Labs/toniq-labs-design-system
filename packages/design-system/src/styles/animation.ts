import {CSSResult, css} from 'element-vir';
import {toniqColors} from './colors';

export const durationCssVarNames = {
    interactionDuration: css`--toniq-interaction-transition-duration`,
    prettyDuration: css`--toniq-pretty-transition-duration`,
    pulseDuration: css`--toniq-pulse-transition-duration`,
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
    /** Pulse effect duration */
    pulse: css`var(${durationCssVarNames.pulseDuration}, 3s)`,
};

export type ToniqAnimationDefinition = {animationName: CSSResult; keyFrames: CSSResult};

export const toniqAnimations = {
    modalGrow: {
        animationName: css`toniq-modal-grow`,
        keyFrames: css`
            @keyframes toniq-modal-grow {
                0% {
                    transform: scale(0);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
        `,
    },
    menuGrow: {
        animationName: css`toniq-menu-grow`,
        keyFrames: css`
            @keyframes toniq-menu-grow {
                0% {
                    transform: scale(0.95);
                    opacity: 0.6;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `,
    },
    buttonPulse: {
        animationName: css`toniq-button-pulse`,
        keyFrames: css`
            @keyframes toniq-button-pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 ${toniqColors.brandPrimary.foregroundColor};
                }
                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px #ffffff00;
                }
                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 #ffffff00;
                }
            }
        `,
    },
} satisfies Record<string, ToniqAnimationDefinition>;
