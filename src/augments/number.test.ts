import {assert} from '@open-wc/testing';
import {
    createReasonableLogarithmicRange,
    findClosestRangeIndex,
    snapToLowerMultipleOfPowerOfTen,
} from './number';

describe(snapToLowerMultipleOfPowerOfTen.name, () => {
    it('should snap numbers to their correct power of 10', () => {
        const testCases: {
            // insert a trailing underscore so the values line up below so it's really
            // easy to read
            input_: number;
            expect: number;
        }[] = [
            {
                input_: 5,
                expect: 5,
            },
            {
                input_: 4516515,
                expect: 4000000,
            },
            {
                input_: 91991915,
                expect: 90000000,
            },
            {
                input_: 100,
                expect: 100,
            },
            {
                input_: 9999,
                expect: 9000,
            },
            {
                input_: 101,
                expect: 100,
            },
            {
                input_: 1,
                expect: 1,
            },
            {
                input_: 0,
                expect: 0,
            },
            {
                input_: -193,
                expect: -100,
            },
        ];

        testCases.forEach((testCase) => {
            assert.strictEqual(
                snapToLowerMultipleOfPowerOfTen(testCase.input_),
                testCase.expect,
                `Failed for ${testCase.input_} -> ${testCase.expect}`,
            );
        });
    });
});

describe(findClosestRangeIndex.name, () => {
    it('should get the right index given a range of numbers', () => {
        const testCases: {input: number; range: number[]; outputIndex: number}[] = [
            {
                input: 44,
                range: [
                    1,
                    2,
                    5,
                    30,
                    40,
                    50,
                    60,
                ],
                outputIndex: 4,
            },
            {
                input: 55,
                range: [
                    1,
                    2,
                    5,
                    30,
                    40,
                    50,
                    60,
                ],
                outputIndex: 6,
            },
            {
                input: 2,
                range: [
                    1,
                    2,
                    5,
                    30,
                    40,
                    50,
                    60,
                ],
                outputIndex: 1,
            },
            {
                input: 6,
                range: [
                    1,
                    2,
                    5,
                    30,
                    40,
                    50,
                    60,
                ],
                outputIndex: 2,
            },
        ];

        testCases.forEach((testCase) => {
            assert.strictEqual(
                findClosestRangeIndex(testCase.range, testCase.input),
                testCase.outputIndex,
            );
        });
    });
});

describe(createReasonableLogarithmicRange.name, () => {
    it('should produce correct log-like ranges', () => {
        const testCases: {
            // insert a trailing underscore so the values line up below so it's really
            // easy to read
            min: number;
            max: number;
            maxStepCount?: number;
            out: number[];
        }[] = [
            {
                min: 5,
                max: 5,
                out: [
                    5,
                    5,
                ],
            },
            {
                min: 333,
                max: 555,
                out: [
                    333,
                    400,
                    500,
                    555,
                ],
            },
            {
                min: 5,
                max: 5_432,
                // prettier-multiline-arrays-set-line-pattern: 5
                out: [
                    5, 6, 7, 8, 9,
                    10, 20, 30, 40, 50,
                    60, 70, 80, 90, 100,
                    200, 300, 400, 500, 600,
                    700, 800, 900, 1000, 2000,
                    3000, 4000, 5000, 5432,
                ],
            },
            {
                min: 5,
                max: 5_432,
                maxStepCount: 10,
                // prettier-multiline-arrays-set-line-pattern: 5
                out: [
                    5, 8, 20, 60, 90,
                    300, 700, 1000, 4000, 5432,
                ],
            },
            {
                min: 1,
                max: 5_432_109,
                maxStepCount: 30,
                // prettier-multiline-arrays-set-line-pattern: 5
                out: [
                    1, 3, 5, 7, 9,
                    20, 40, 60, 80, 100,
                    300, 500, 700, 900, 2000,
                    5000, 7000, 9000, 20000, 40000,
                    60000, 80000, 100000, 300000, 500000,
                    700000, 900000, 2000000, 4000000, 5432109,
                ],
            },
        ];

        testCases.forEach((testCase) => {
            assert.deepStrictEqual(
                createReasonableLogarithmicRange(testCase.min, testCase.max, testCase.maxStepCount),
                testCase.out,
                `Failed for ${JSON.stringify(testCase, null, 4)}`,
            );
        });
    });
});
