import {isTruthy} from '@augment-vir/common';
import {FullDate, toLocaleString} from 'date-vir';
import {html} from 'element-vir';
import {defineToniqElement} from '../define-toniq-element';

function formatFullDate(fullDate: FullDate): {
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

export const ToniqDateTime = defineToniqElement<{
    fullDate: FullDate;
    parts: {
        date: boolean;
        time: boolean;
    };
}>()({
    tagName: 'toniq-date-time',
    renderCallback({inputs}) {
        const formatted = formatFullDate(inputs.fullDate);
        const outputString = [
            inputs.parts.date && formatted.date,
            inputs.parts.time && formatted.time,
        ]
            .filter(isTruthy)
            .join(' ');

        const title = [
            formatted.date,
            formatted.time,
            `(${inputs.fullDate.timezone})`,
        ].join(' ');

        return html`
            <span title=${title}>${outputString}</span>
        `;
    },
});
