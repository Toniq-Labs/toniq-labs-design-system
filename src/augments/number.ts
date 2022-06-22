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
