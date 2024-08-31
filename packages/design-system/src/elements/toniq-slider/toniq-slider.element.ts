import {addPercent, addPx} from '@augment-vir/common';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    listen,
    onResize,
    renderIf,
    unsafeCSS,
} from 'element-vir';
import {noUserSelect} from 'vira';
import {testId} from '../../directives/test-id.directive';
import {toniqDurations} from '../../styles/animation';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {
    ToniqSliderValueType,
    calculateLabelMargin,
    classNames,
    getAllVerifiedAndFixedInputs,
    getLabelOverlapDistance,
    getRangeWidth,
    isDoubleRangeValue,
    makeLabel,
    maybeFixSliderValues,
    maybeTransformToLogValue,
    setToniqSliderTempColor,
    toniqSliderTempColorLevels,
    toniqSliderTestIds,
} from './slider-logic';
import {ToniqSliderDoubleRangeValue, ToniqSliderInputs} from './toniq-slider-inputs';

const thumbSizeNumber = 16;
const thumbSize = css`
    ${thumbSizeNumber}px
`;
const thumbStyle = css`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${thumbSize};
    width: ${thumbSize};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${toniqDurations.interaction};
    ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
`;

const thumbHoverStyle = css`
    transform: scale(1.2);
`;

function getCurrentTemp(percentage: number) {
    if (percentage > 100 * (2 / 3)) {
        return 'cold';
    }
    if (percentage > 100 * (1 / 3)) {
        return 'medium';
    }
    return 'hot';
}

export function maybeFixRecursively(slider: (typeof ToniqSlider)['instanceType']) {
    requestAnimationFrame(() => {
        const doubleCheckedValue = getAllVerifiedAndFixedInputs(
            slider.instanceInputs,
            slider,
        ).elementValue;
        // update the actual input HTML sliders to the fixed values if needed
        if (maybeFixSliderValues(doubleCheckedValue, slider)) {
            /**
             * Disable the slider for now cause it's doing weird things. This will get overridden in
             * the template when the slider renders.
             */
            slider.setAttribute('disabled', 'true');
            maybeFixRecursively(slider);
        }
    });
}

export const ToniqSlider = defineToniqElement<ToniqSliderInputs>()({
    tagName: 'toniq-slider',
    stateInitStatic: {
        rangeWidth: 0,
        labelOverlap: 0,
        /**
         * This is used to make sure that situations in which the slider value changes, emits an
         * event, but the parent does not update the input value are handled properly. Namely, the
         * slider knob does not move.
         */
        internalValue: -1 as ToniqSliderInputs['value'],
    },
    events: {
        valueChange: defineElementEvent<ToniqSliderValueType>(),
    },
    styles: css`
        :host {
            display: block;
        }

        .${unsafeCSS(classNames.range)}-temp {
            background: linear-gradient(
                90deg,
                ${unsafeCSS(toniqSliderTempColorLevels.cold)},
                ${unsafeCSS(toniqSliderTempColorLevels.medium)},
                ${unsafeCSS(toniqSliderTempColorLevels.hot)}
            );
        }

        .${unsafeCSS(classNames.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
        }

        .range-no-label {
            margin-bottom: 0;
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        .progress-temp {
            background-color: transparent;
        }

        .${unsafeCSS(classNames.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
        }

        .${unsafeCSS(classNames.labelPixelMarginWrapper)},
            .${unsafeCSS(classNames.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${unsafeCSS(classNames.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${unsafeCSS(classNames.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${createFocusStyles({
            mainSelector: '.slider:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
            outlineGap: 6,
        })}

        .${unsafeCSS(classNames.lowerSlider)},
        .${unsafeCSS(classNames.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-moz-range-thumb {
            ${thumbStyle}
        }

        .${unsafeCSS(classNames.slider)}.hot::-moz-range-thumb {
            ${setToniqSliderTempColor('hot')}
        }
        .${unsafeCSS(classNames.slider)}.medium::-moz-range-thumb {
            ${setToniqSliderTempColor('medium')}
        }
        .${unsafeCSS(classNames.slider)}.cold::-moz-range-thumb {
            ${setToniqSliderTempColor('cold')}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-webkit-slider-thumb {
            ${thumbStyle}
        }

        .${unsafeCSS(classNames.slider)}.hot::-webkit-slider-thumb {
            ${setToniqSliderTempColor('hot')}
        }
        .${unsafeCSS(classNames.slider)}.medium::-webkit-slider-thumb {
            ${setToniqSliderTempColor('medium')}
        }
        .${unsafeCSS(classNames.slider)}.cold::-webkit-slider-thumb {
            ${setToniqSliderTempColor('cold')}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-webkit-slider-thumb:hover {
            ${thumbHoverStyle}
        }

        /* these selectors fail if combined with a comma */
        .${unsafeCSS(classNames.slider)}::-moz-range-thumb:hover {
            ${thumbHoverStyle}
        }
    `,
    initCallback: ({host}) => {
        host.addEventListener('mousemove', () => {
            maybeFixRecursively(host);
        });
        host.addEventListener('keydown', () => {
            maybeFixRecursively(host);
        });
        host.addEventListener('keyup', () => {
            maybeFixRecursively(host);
        });
    },
    renderCallback({inputs, host, events, dispatch, state, updateState}) {
        const {actualValue, logRange, isLogScale, suffix, elementValue, elementLimits, rangeWidth} =
            getAllVerifiedAndFixedInputs({...inputs}, host);

        maybeFixRecursively(host);

        if (isDoubleRangeValue(elementValue)) {
            return doubleRangeSlider(
                actualValue as ToniqSliderDoubleRangeValue,
                elementValue,
                elementLimits,
            );
        } else {
            return singleRangeSlider(actualValue as number, elementValue, elementLimits);
        }

        function doubleRangeSlider(
            doubleRangeValue: ToniqSliderDoubleRangeValue,
            elementValue: ToniqSliderDoubleRangeValue,
            elementLimits: ToniqSliderDoubleRangeValue,
        ) {
            const progressBarPosition = {
                left: addPx(
                    ((rangeWidth - thumbSizeNumber) * (elementValue.min - elementLimits.min)) /
                        (elementLimits.max - elementLimits.min) +
                        thumbSizeNumber / 2,
                ),
                right: addPx(
                    ((rangeWidth - thumbSizeNumber) * (elementLimits.max - elementValue.max)) /
                        (elementLimits.max - elementLimits.min) +
                        thumbSizeNumber / 2,
                ),
            };

            const lowerLabel = makeLabel(doubleRangeValue.min, suffix, isLogScale);
            const upperLabel = makeLabel(doubleRangeValue.max, suffix, isLogScale);

            // this ensures that the labels never overlap each other
            requestAnimationFrame(() => {
                const labelOverlap = getLabelOverlapDistance(host);
                if (labelOverlap !== state.labelOverlap) {
                    updateState({
                        labelOverlap,
                    });
                }
            });

            const shouldMoveUpperLabel =
                (elementLimits.max - elementValue.max) / (elementLimits.max - elementLimits.min) >
                0.5;

            const lowerLabelPercentMargin = calculateLabelMargin({
                value: elementValue.min,
                limits: {
                    min: elementLimits.min,
                    max: elementValue.max,
                },
                flip: true,
            });
            const upperLabelPercentMargin = calculateLabelMargin({
                value: elementValue.max,
                limits: {
                    min: elementValue.min,
                    max: elementLimits.max,
                },
                flip: false,
            });

            const upperPixelMargin =
                state.labelOverlap && shouldMoveUpperLabel ? state.labelOverlap : 0;
            const lowerPixelMargin =
                state.labelOverlap && !shouldMoveUpperLabel ? state.labelOverlap : 0;

            return html`
                <div
                    class="range"
                    ${onResize(() => {
                        updateState({
                            rangeWidth: getRangeWidth(host),
                        });
                    })}
                >
                    <div
                        class="progress"
                        style="left: ${progressBarPosition.left}; right:${progressBarPosition.right}"
                    ></div>
                    <span
                        class="${classNames.labelOuterWrapper} ${classNames.lowerLabelWrapper}"
                        style="left: ${progressBarPosition.left};"
                    >
                        <span
                            class="${classNames.labelPercentMarginWrapper}"
                            style="margin-left: ${addPercent(lowerLabelPercentMargin)}"
                        >
                            <span
                                class="${classNames.labelPixelMarginWrapper}"
                                style="margin-right: ${addPx(lowerPixelMargin)}"
                                ${testId(toniqSliderTestIds.lowerLabel)}
                            >
                                ${lowerLabel}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${classNames.labelOuterWrapper} ${classNames.upperLabelWrapper} ${classNames.rightAlignedLabelWrapper}"
                        style="right: ${progressBarPosition.right}"
                    >
                        <span
                            class="${classNames.labelPercentMarginWrapper}"
                            style="margin-right: ${addPercent(upperLabelPercentMargin)}"
                        >
                            <span
                                class="${classNames.labelPixelMarginWrapper}"
                                style="margin-left: ${addPx(upperPixelMargin)}"
                                ${testId(toniqSliderTestIds.upperLabel)}
                            >
                                ${upperLabel}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${inputs.disabled ?? false}
                            type="range"
                            step=${inputs.step}
                            class="${classNames.lowerSlider} ${classNames.slider}"
                            .min=${elementLimits.min}
                            .max=${elementLimits.max}
                            .value=${elementValue.min}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    min: maybeTransformToLogValue(
                                        Number(inputElement.value),
                                        logRange,
                                        isLogScale,
                                    ),
                                };
                                updateWithNewValue(newValue);
                            })}
                        />
                        <input
                            ?disabled=${inputs.disabled ?? false}
                            type="range"
                            class="${classNames.upperSlider} ${classNames.slider}"
                            step=${inputs.step}
                            .min=${elementLimits.min}
                            .max=${elementLimits.max}
                            .value=${elementValue.max}
                            ${testId(toniqSliderTestIds.slider)}
                            ${listen('input', (event) => {
                                const inputElement = event.target as HTMLInputElement;
                                const newValue = {
                                    ...doubleRangeValue,
                                    max: maybeTransformToLogValue(
                                        Number(inputElement.value),
                                        logRange,
                                        isLogScale,
                                    ),
                                };
                                updateWithNewValue(newValue);
                            })}
                        />
                    </div>
                </div>
            `;
        }

        function updateWithNewValue(newValue: ToniqSliderInputs['value']) {
            updateState({internalValue: newValue});

            if (!inputs.disabled) {
                dispatch(new events.valueChange(newValue));
            }
        }

        function singleRangeSlider(
            singleValue: number,
            elementValue: number,
            elementLimits: ToniqSliderDoubleRangeValue,
        ) {
            const progressRightPosition = addPx(
                ((rangeWidth - thumbSizeNumber) * (elementLimits.max - elementValue)) /
                    (elementLimits.max - elementLimits.min) +
                    thumbSizeNumber / 2,
            );

            const label = makeLabel(singleValue, suffix, isLogScale);
            const labelMargin = calculateLabelMargin({
                value: elementValue,
                limits: elementLimits,
                flip: false,
            });

            return html`
                <div
                    class="${classMap({
                        range: true,
                        'range-temp': !!inputs.colorTemperature,
                        'range-no-label': !!inputs.noLabel,
                    })}"
                    ${onResize(() => {
                        updateState({
                            rangeWidth: getRangeWidth(host),
                        });
                    })}
                >
                    <div
                        class="progress ${inputs.colorTemperature ? 'progress-temp' : ''}"
                        style="left: 0px; right: ${progressRightPosition}"
                    ></div>
                    ${renderIf(
                        !!!inputs.noLabel,
                        html`
                            <span
                                class="${classNames.labelOuterWrapper} ${classNames.rightAlignedLabelWrapper}"
                                style="right: ${progressRightPosition}"
                            >
                                <span
                                    class="${classNames.labelPercentMarginWrapper}"
                                    style="margin-right: ${addPercent(labelMargin)}"
                                    ${testId(toniqSliderTestIds.label)}
                                >
                                    ${label}
                                </span>
                            </span>
                        `,
                    )}

                    <input
                        ?disabled=${inputs.disabled ?? false}
                        type="range"
                        class="${classNames.slider} ${inputs.colorTemperature
                            ? getCurrentTemp(Math.abs(labelMargin))
                            : ''}"
                        step=${inputs.step}
                        .min=${elementLimits.min}
                        .max=${elementLimits.max}
                        .value=${elementValue}
                        ${testId(toniqSliderTestIds.slider)}
                        ${listen('input', (event) => {
                            const inputElement = event.target as HTMLInputElement;
                            const newValue = maybeTransformToLogValue(
                                Number(inputElement.value),
                                logRange,
                                isLogScale,
                            );
                            updateWithNewValue(newValue);
                        })}
                    />
                </div>
            `;
        }
    },
});
