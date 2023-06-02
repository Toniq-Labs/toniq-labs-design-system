import {css, defineElementEvent, html, listen} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {makeDropShadowCardStyles, toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqFlipCard = defineToniqElement<{flipped: boolean}>()({
    tagName: 'toniq-flip-card',
    events: {
        flippedChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            max-width: 100%;
            display: inline-flex;
            perspective: 1200px;
            position: relative;
            border-radius: 16px;
            box-sizing: border-box;
            min-height: 200px;
        }

        * {
            border-radius: inherit;
            box-sizing: border-box;
        }

        .flip-wrapper {
            width: 100%;
            flex-grow: 1;
            position: relative;
            transition: transform 600ms;
            transform-style: preserve-3d;
            will-change: transform;
        }

        .flip-wrapper.flipped {
            transform: rotateY(180deg);
        }

        .flip-wrapper.flipped .card-face.front {
            pointer-events: none;
        }

        .flip-wrapper.flipped .card-face.back {
            pointer-events: auto;
        }

        ${makeDropShadowCardStyles('.card-face', false)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${toniqColors.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        return html`
            <div
                class="flip-wrapper ${classMap({flipped: inputs.flipped})}"
                ${listen('click', () => {
                    /**
                     * If you don't want this to actually change the flipped value, simply don't
                     * listen to the flippedChange event in the consumer.
                     */
                    dispatch(new events.flippedChange(!inputs.flipped));
                })}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `;
    },
});
