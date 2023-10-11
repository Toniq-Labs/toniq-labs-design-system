export interface ToniqSliderDoubleRangeValue {
    min: number;
    max: number;
}

type ToniqSliderSingleValueInputs = {
    value: number;
    /** Set to true to enable double range slider. */
    double?: false | undefined;
};

type ToniqSliderDoubleValueInputs = {
    value: Readonly<ToniqSliderDoubleRangeValue>;
    /** Set to true to enable double range slider. */
    double: true;
};

export type ToniqSliderInputs = Readonly<
    {
        /**
         * Use to set the min value. If the value is less than this min then the value will
         * automatically be clipped up to this min.
         */
        min: number;
        /**
         * Use to set the max value. If the input is greater than the max then the value will
         * clipped down to this max.
         */
        max: number;
        logScale?: boolean;
        step?: number;
        /** Appends the given string to the slider's value for label text. */
        suffix?: string;
        disabled?: boolean;
    } & (ToniqSliderSingleValueInputs | ToniqSliderDoubleValueInputs)
>;
