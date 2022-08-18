import {isObject} from 'augment-vir';
import {clamp} from '../../augments/number';

export interface ToniqSliderDoubleRangeValue {
    min: number;
    max: number;
}

export interface ToniqSliderReferenceElements {
    progress: HTMLElement | null | undefined;
    slider?: HTMLInputElement | null | undefined;
    label?: HTMLElement | null | undefined;
    lowerSlider?: HTMLInputElement | null | undefined;
    upperSlider?: HTMLInputElement | null | undefined;
    lowerLabel?: HTMLElement | null | undefined;
    upperLabel?: HTMLElement | null | undefined;
}

export interface ToniqSliderProgressStyle {
    width: string;
    left?: string;
    right?: string;
}

export interface ToniqSliderLabelStyle {
    innerText: string;
    left?: string;
}

export type ToniqSliderValueType = number | ToniqSliderDoubleRangeValue;

export const classNames = {
    lowerLabelWrapper: 'lower-label-wrapper',
    upperLabelWrapper: 'upper-label-wrapper',
    labelPercentMarginWrapper: 'label-percent-wrapper',
    labelPixelMarginWrapper: 'label-pixel-wrapper',
    labelOuterWrapper: 'label-outer-wrapper',
    rightAlignedLabelWrapper: 'label-right-wrapper',
    range: 'range',
    lowerSlider: 'lower-slider',
    upperSlider: 'upper-slider',
    slider: 'slider',
} as const;

export const sliderTestIds = {
    label: 'label',
    upperLabel: 'upper-label',
    lowerLabel: 'upper-label',
    slider: 'slider',
};

export function getLabelElementBoxes(host: HTMLElement) {
    const lowerLabel = host.shadowRoot?.querySelector(
        `.${classNames.lowerLabelWrapper} .${classNames.labelPercentMarginWrapper}`,
    );
    const upperLabel = host.shadowRoot?.querySelector(
        `.${classNames.upperLabelWrapper} .${classNames.labelPercentMarginWrapper}`,
    );

    if (upperLabel instanceof HTMLElement && lowerLabel instanceof HTMLElement) {
        const lowerRect = lowerLabel.getBoundingClientRect();
        const upperRect = upperLabel.getBoundingClientRect();
        return {
            lower: lowerRect,
            upper: upperRect,
        };
    } else {
        return undefined;
    }
}

export function getLabelOverlapDistance(host: HTMLElement, buffer = 8): number {
    const labelBoxes = getLabelElementBoxes(host);

    if (!labelBoxes) {
        return 0;
    }

    const diff = labelBoxes.lower.right - labelBoxes.upper.left + buffer;

    return Math.max(0, diff);
}

export function calculateLabelMargin({
    value,
    limits,
    flip,
}: {
    value: number;
    limits: ToniqSliderDoubleRangeValue;
    flip: boolean;
}): number {
    const ratio = (limits.max - value) / (limits.max - limits.min);
    const percentage = ratio * 100;
    const finalValue = flip ? 100 - percentage : percentage;
    return -finalValue;
}

export function isDoubleRangeValue(
    value: ToniqSliderValueType,
): value is ToniqSliderDoubleRangeValue {
    return isObject(value) && value.min !== undefined && value.max !== undefined;
}

export function getRangeWidth(host: HTMLElement): number {
    const sliderElement = host.shadowRoot?.querySelector(`.${classNames.range}`);

    return sliderElement?.clientWidth ?? 0;
}

export function makeLabel(value: number, suffix: string): string {
    return `${value} ${suffix}`;
}

function getCorrectedLimits({min, max}: ToniqSliderDoubleRangeValue): ToniqSliderDoubleRangeValue {
    if (min > max) {
        return {
            min: max,
            max: min,
        };
    }
    return {min, max};
}

function getCorrectedValue({
    value,
    double,
    min,
    max,
}: Readonly<
    {
        value: Readonly<ToniqSliderValueType>;
        double: boolean;
    } & ToniqSliderDoubleRangeValue
>): ToniqSliderValueType {
    if (double) {
        if (isDoubleRangeValue(value)) {
            const clampedValue: ToniqSliderDoubleRangeValue = {
                min: clamp(value.min, min, Math.min(value.max, max)),
                max: clamp(value.max, Math.max(value.min, min), max),
            };

            return clampedValue;
        } else {
            return {min, max};
        }
    } else {
        if (isDoubleRangeValue(value)) {
            return min;
        } else {
            const clampedValue: number = clamp(value, min, max);

            return clampedValue;
        }
    }
}

export function getCorrectedLimitsAndValue(
    params: Readonly<
        {
            value: Readonly<ToniqSliderValueType>;
            double: boolean;
        } & ToniqSliderDoubleRangeValue
    >,
) {
    return {
        actualLimits: getCorrectedLimits(params),
        actualValue: getCorrectedValue(params),
    };
}

export function maybeFixSliderValues(fixedValue: ToniqSliderValueType, host: HTMLElement) {
    if (isDoubleRangeValue(fixedValue)) {
        const lowerSlider = host.shadowRoot?.querySelector(`.${classNames.lowerSlider}`);
        const upperSlider = host.shadowRoot?.querySelector(`.${classNames.upperSlider}`);
        if (lowerSlider instanceof HTMLInputElement && upperSlider instanceof HTMLInputElement) {
            if (Number(lowerSlider.value) !== fixedValue.min) {
                lowerSlider.value = String(fixedValue.min);
            }
            if (Number(upperSlider.value) !== fixedValue.max) {
                upperSlider.value = String(fixedValue.max);
            }
        }
    } else {
        const slider = host.querySelector(`.${classNames.slider}`);
        if (slider instanceof HTMLInputElement) {
            if (Number(slider.value) !== fixedValue) {
                slider.value = String(fixedValue);
            }
        }
    }
}
