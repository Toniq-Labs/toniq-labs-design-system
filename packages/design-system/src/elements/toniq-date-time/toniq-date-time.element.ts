import {isTruthy} from '@augment-vir/common';
import {FullDate, getNowInUserTimezone} from 'date-vir';
import {html} from 'element-vir';
import {RelativeDurationUnit, formatFullDate, formatRelativeDuration} from '../../augments/date';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqDateTime = defineToniqElement<{
    fullDate: FullDate;
    parts: {
        date: boolean;
        time: boolean;
    };
    /**
     * Passing anything here triggers a relative, rather than absolute, date string format.
     * `ToniqDateTime` will attempt to create a relative string using the units provided or fallback
     * to an absolute date string format.
     */
    relativeUnits?: ReadonlyArray<RelativeDurationUnit> | boolean | undefined;
}>()({
    tagName: 'toniq-date-time',
    renderCallback({inputs}) {
        const formatted = formatFullDate(inputs.fullDate);
        const outputString = [
            inputs.parts?.date && formatted.date,
            inputs.parts?.time && formatted.time,
        ]
            .filter(isTruthy)
            .join(' ');

        const title = [
            formatted.date,
            formatted.time,
            `(${inputs.fullDate.timezone})`,
        ].join(' ');

        const humanizeString =
            typeof inputs.relativeUnits == 'boolean'
                ? formatRelativeDuration({start: inputs.fullDate, end: getNowInUserTimezone()})
                : formatRelativeDuration({
                      start: inputs.fullDate,
                      end: getNowInUserTimezone(),
                      allowedRelativeUnits: inputs.relativeUnits,
                  });

        return html`
            ${inputs.relativeUnits
                ? html`
                      <span title=${title}>${humanizeString}</span>
                  `
                : html`
                      <span title=${title}>${outputString}</span>
                  `}
        `;
    },
});
