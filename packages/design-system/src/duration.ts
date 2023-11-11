import {
    DurationUnit,
    FullDate,
    diffDates,
    formatPresets,
    getNowInUserTimezone,
    isDateAfter,
    toLocaleString,
} from 'date-vir';

export type HumanizeDurationUnit = 'month' | 'week' | 'day' | 'hour' | 'minute';

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

export function humanizeDuration({
    date,
    allowedRelativeUnits = [
        'month',
        'week',
        'day',
        'hour',
        'minute',
    ],
}: {
    date: FullDate;
    /**
     * Controls which relative durations are allowed. Always uses the lowest possible unit. IE, if
     * 'week' is included, "X weeks ago" or "in X weeks" may be used (if the given date further ago
     * than all other provided units). See tests for more examples.
     */
    allowedRelativeUnits?: HumanizeDurationUnit[] | undefined;
}): string {
    const {days} = diffDates({
        start: date,
        end: getNowInUserTimezone(),
        unit: DurationUnit.Days,
    });

    const {hours} = diffDates({
        start: date,
        end: getNowInUserTimezone(),
        unit: DurationUnit.Hours,
    });

    const {minutes} = diffDates({
        start: date,
        end: getNowInUserTimezone(),
        unit: DurationUnit.Minutes,
    });

    const localeDate = toLocaleString(date, formatPresets.DateFull);

    let duration: number;
    let unit: string;
    console.log(days);
    if (
        isDateAfter({
            start: getNowInUserTimezone(),
            end: date,
        })
    ) {
        if (allowedRelativeUnits.includes('minute') && Math.abs(Math.round(minutes)) < 2) {
            return 'now';
        } else if (allowedRelativeUnits.includes('minute') && Math.abs(Math.round(minutes)) < 60) {
            duration = minutes;
            unit = 'min';
        } else if (allowedRelativeUnits.includes('hour') && Math.abs(Math.round(hours)) < 24) {
            duration = hours;
            unit = 'hour';
        } else if (allowedRelativeUnits.includes('day') && Math.abs(Math.round(days)) < 7) {
            duration = days;
            unit = 'day';
        } else if (allowedRelativeUnits.includes('week') && Math.abs(Math.round(days)) < 30) {
            duration = days / 7;
            unit = 'week';
        } else if (allowedRelativeUnits.includes('month') && Math.abs(Math.round(days)) < 365) {
            duration = days / 30;
            unit = 'month';
        } else {
            return localeDate;
        }

        const roundDuration = Math.round(Math.abs(duration));
        return `in ${roundDuration > 1 ? roundDuration : 'a'} ${unit}${
            roundDuration > 1 ? 's' : ''
        }`;
    } else {
        if (allowedRelativeUnits.includes('minute') && Math.round(minutes) < 2) {
            return 'Just now';
        } else if (allowedRelativeUnits.includes('minute') && Math.round(minutes) < 60) {
            duration = minutes;
            unit = 'min';
        } else if (allowedRelativeUnits.includes('hour') && Math.round(hours) < 24) {
            duration = hours;
            unit = 'hour';
        } else if (allowedRelativeUnits.includes('day') && Math.round(days) < 7) {
            duration = days;
            unit = 'day';
        } else if (allowedRelativeUnits.includes('week') && Math.round(days) < 30) {
            duration = days / 7;
            unit = 'week';
        } else if (allowedRelativeUnits.includes('month') && Math.round(days) < 365) {
            duration = days / 30;
            unit = 'month';
        } else {
            return localeDate;
        }

        const roundDuration = Math.round(duration);
        return `${roundDuration} ${unit}${roundDuration > 1 ? 's' : ''} ago`;
    }
}
