/**
 * This function re-maps an input in a range of another min and max. If the input min and max is
 * from 0 to 100 and we want an output value that will range from 0 to 500 regardless of the input
 * value. https://www.arduino.cc/reference/en/language/functions/math/map/
 */
export function mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function findClosestRangeIndex(logRange: number[], findValue: number): number {
    const lowestValue = logRange[0];
    const highestValue = logRange[logRange.length - 1];
    if (lowestValue == undefined) {
        return 0;
    }
    if (highestValue == undefined) {
        return 0;
    }
    if (findValue < lowestValue) {
        return lowestValue;
    }
    if (findValue > highestValue) {
        return highestValue;
    }

    const logValueIndex = logRange.findIndex((logValue, index) => {
        const nextValue = logRange[index + 1];
        if (nextValue == undefined) {
            return true;
        }
        return logValue <= findValue && nextValue >= findValue;
    });
    if (logValueIndex < 0) {
        return lowestValue;
    }

    const indexRangeValue = logRange[logValueIndex];
    if (indexRangeValue == undefined) {
        return lowestValue;
    }
    const nextIndexRangeValue = logRange[logValueIndex + 1];
    if (nextIndexRangeValue == undefined) {
        return indexRangeValue;
    }

    const diffToIndex = findValue - indexRangeValue;
    const diffToNextIndex = nextIndexRangeValue - findValue;

    return diffToIndex < diffToNextIndex ? logValueIndex : logValueIndex + 1;
}

export function createReasonableLogarithmicRange(
    min: number,
    max: number,
    maxStepCount = 100,
): number[] {
    if (min > max) {
        [
            min,
            max,
        ] = [
            max,
            min,
        ];
    }
    if (maxStepCount < 2) {
        // must at least allow 2 steps
        maxStepCount = 2;
    }
    let iterator = snapToLowerMultipleOfPowerOfTen(min);
    const range: number[] = [min];
    while (iterator < max) {
        const currentStep = Math.pow(10, String(iterator).length - 1);
        const newRangeValue = iterator + currentStep;
        if (newRangeValue < max) {
            range.push(newRangeValue);
        }
        iterator = newRangeValue;
    }
    range.push(max);

    if (range.length > maxStepCount) {
        mutateRemoveRangeEntries(range, maxStepCount);
        if (range.length > maxStepCount) {
            mutateRemoveRangeEntries(range, maxStepCount);
        }
    }

    return range;
}

function mutateRemoveRangeEntries(range: number[], maxStepCount: number): void {
    const removeCount = range.length - maxStepCount;
    const removalOffset =
        (range.length -
            // subtract two because we don't want to modify the first or last range entries
            2) /
        removeCount;
    for (let index = range.length - 2; index >= 1; index -= removalOffset) {
        range.splice(Math.floor(index), 1);
    }
}

export function snapToLowerMultipleOfPowerOfTen(input: number): number {
    let negativeModifier = 1;
    if (!input) {
        return input;
    }
    if (input < 0) {
        negativeModifier = -1;
        input = input * -1;
    }
    const stringNumber = input.toFixed(0);
    const lowerPowerOfTen = Math.pow(10, stringNumber.length - 1);
    const leadingDigit = Number(stringNumber[0] || 1);
    return lowerPowerOfTen * leadingDigit * negativeModifier;
}
