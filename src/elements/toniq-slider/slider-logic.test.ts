import {assert} from '@open-wc/testing';
import {createReasonableLogarithmicRange} from '../../augments/number';
import {
    getPossiblyLogarithmicValuesForElement,
    ToniqSliderDoubleRangeValue,
    ToniqSliderValueType,
} from './slider-logic';

describe(getPossiblyLogarithmicValuesForElement.name, () => {
    it('should get the right index given a range of numbers', () => {
        const testCases: {
            actualValue: ToniqSliderValueType;
            actualLimits: ToniqSliderDoubleRangeValue;
            logScale: boolean;
            output: {
                elementValue: ToniqSliderValueType;
                elementLimits: ToniqSliderDoubleRangeValue;
            };
        }[] = [
            {
                actualValue: 85,
                actualLimits: {
                    min: 1,
                    max: 5_000_000,
                },
                logScale: true,
                output: {
                    elementValue: 17,
                    elementLimits: {
                        min: 0,
                        max: 58,
                    },
                },
            },
        ];

        testCases.forEach((testCase) => {
            const logRange = createReasonableLogarithmicRange(
                testCase.actualLimits.min,
                testCase.actualLimits.max,
            );
            assert.deepStrictEqual(
                getPossiblyLogarithmicValuesForElement({...testCase, logRange}),
                testCase.output,
            );
        });
    });
});
