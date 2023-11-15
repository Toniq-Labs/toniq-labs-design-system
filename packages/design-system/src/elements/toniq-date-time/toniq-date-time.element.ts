import {PartialAndUndefined, isTruthy} from '@augment-vir/common';
import {
    DurationUnit,
    FullDate,
    RelativeStringOptions,
    getNowInUserTimezone,
    toLocaleString,
    toRelativeString,
    toSimpleString,
} from 'date-vir';
import {html} from 'element-vir';
import {defineToniqElement} from '../define-toniq-element';

export function formatFullDate(fullDate: FullDate): {
    date: string;
    time: string;
} {
    /**
     * Note that the below .replace strings are to fix weird behavior in Chromium where the "NARROW
     * NO-BREAK SPACE" character (code 8239) is used instead of a space (code 32) before AM/PM.
     */
    return {
        date: toLocaleString(fullDate, {dateStyle: 'medium'}).replace(/\s/g, ' '),
        time: toLocaleString(fullDate, {timeStyle: 'short'}).replace(/\s/g, ' '),
    };
}

export const defaultRelativeDateStringOptions: Partial<RelativeStringOptions> = {
    blockedRelativeUnits: [
        DurationUnit.Years,
        DurationUnit.Quarters,
    ],
    limitUnitMax: true,
};

export const ToniqDateTime = defineToniqElement<{
    fullDate: FullDate;
    parts: {
        date: boolean;
        time: boolean;
    };
    /**
     * Passing an object here with "tryRelative: true" triggers a relative, rather than absolute,
     * date string format. `ToniqDateTime` will attempt to create a relative string and fallback to
     * an absolute date string format if necessary.
     */
    relativeOptions?:
        | (PartialAndUndefined<
              RelativeStringOptions & {
                  /**
                   * By default the relative string will be calculated relative to the current time.
                   * Override that behavior by passing in a valid for relativeTo.
                   */
                  relativeTo: FullDate;
              }
          > & {
              /** Set to true to use relative date. */
              tryRelative: boolean;
          })
        | undefined;
}>()({
    tagName: 'toniq-date-time',
    renderCallback({inputs}) {
        const formatted = formatFullDate(inputs.fullDate);
        const absoluteString = [
            inputs.parts?.date && formatted.date,
            inputs.parts?.time && formatted.time,
        ]
            .filter(isTruthy)
            .join(' ');

        const everythingString = toSimpleString(inputs.fullDate, {
            includeSeconds: true,
            includeTimezone: true,
        });

        const relativeString = inputs.relativeOptions?.tryRelative
            ? toRelativeString({
                  fullDate: inputs.fullDate,
                  relativeTo: inputs.relativeOptions.relativeTo || getNowInUserTimezone(),
                  options: {
                      ...defaultRelativeDateStringOptions,
                      ...inputs.relativeOptions,
                  },
              })
            : undefined;

        return html`
            <span title=${everythingString}>${relativeString || absoluteString}</span>
        `;
    },
});
