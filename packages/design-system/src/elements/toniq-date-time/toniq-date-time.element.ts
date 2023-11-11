import {isTruthy} from '@augment-vir/common';
import {FullDate} from 'date-vir';
import {html} from 'element-vir';
import {HumanizeDurationUnit, formatFullDate, humanizeDuration} from '../../duration';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqDateTime = defineToniqElement<{
    fullDate: FullDate;
    parts?: {
        date: boolean;
        time: boolean;
    };
    isHumanize?: boolean;
    allowedRelativeUnits?: HumanizeDurationUnit[];
}>()({
    tagName: 'toniq-date-time',
    renderCallback({inputs}) {
        const {fullDate, allowedRelativeUnits, isHumanize, parts} = inputs;
        const formatted = formatFullDate(fullDate);
        const outputString = [
            parts?.date && formatted.date,
            parts?.time && formatted.time,
        ]
            .filter(isTruthy)
            .join(' ');

        const title = [
            formatted.date,
            formatted.time,
            `(${fullDate.timezone})`,
        ].join(' ');

        const humanizeString = humanizeDuration({date: fullDate, allowedRelativeUnits});

        return html`
            ${isHumanize
                ? html`
                      <span title=${title}>${humanizeString}</span>
                  `
                : html`
                      <span title=${title}>${outputString}</span>
                  `}
        `;
    },
});
