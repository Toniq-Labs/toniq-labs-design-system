import {
    DurationUnit,
    FullDate,
    diffDates,
    formatPresets,
    isDateAfter,
    toLocaleString,
} from 'date-vir';

export enum RelativeDurationUnit {
    Month = 'month',
    Week = 'week',
    Day = 'day',
    Hour = 'hour',
    Minute = 'minute',
}

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

export function formatRelativeDuration({
    start,
    end,
    allowedRelativeUnits = [
        RelativeDurationUnit.Month,
        RelativeDurationUnit.Week,
        RelativeDurationUnit.Day,
        RelativeDurationUnit.Hour,
        RelativeDurationUnit.Minute,
    ],
}: {
    start: Readonly<FullDate>;
    end: Readonly<FullDate>;
    /**
     * Controls which relative durations are allowed. Always uses the lowest possible unit. IE, if
     * 'week' is included, "X weeks ago" or "in X weeks" may be used (if the given date further ago
     * than all other provided units). See tests for more examples.
     */
    allowedRelativeUnits?: ReadonlyArray<RelativeDurationUnit> | undefined;
}): string {
    const {days} = diffDates({
        start,
        end,
        unit: DurationUnit.Days,
    });

    const {hours} = diffDates({
        start,
        end,
        unit: DurationUnit.Hours,
    });

    const {minutes} = diffDates({
        start,
        end,
        unit: DurationUnit.Minutes,
    });

    const localeDate = toLocaleString(start, formatPresets.DateFull);

    let duration: number;
    let unit: string;

    if (
        isDateAfter({
            start: end,
            end: start,
        })
    ) {
        if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Minute) &&
            Math.abs(Math.round(minutes)) < 2
        ) {
            return 'now';
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Minute) &&
            Math.abs(Math.round(minutes)) < 60
        ) {
            duration = minutes;
            unit = 'min';
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Hour) &&
            Math.abs(Math.round(hours)) < 24
        ) {
            duration = hours;
            unit = RelativeDurationUnit.Hour;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Day) &&
            Math.abs(Math.round(days)) < 7
        ) {
            duration = days;
            unit = RelativeDurationUnit.Day;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Week) &&
            Math.abs(Math.round(days)) < 30
        ) {
            duration = days / 7;
            unit = RelativeDurationUnit.Week;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Month) &&
            Math.abs(Math.round(days)) < 365
        ) {
            duration = days / 30;
            unit = RelativeDurationUnit.Month;
        } else {
            return localeDate;
        }

        const roundDuration = Math.round(Math.abs(duration));
        return `in ${roundDuration > 1 ? roundDuration : 'a'} ${unit}${
            roundDuration > 1 ? 's' : ''
        }`;
    } else {
        if (allowedRelativeUnits.includes(RelativeDurationUnit.Minute) && Math.round(minutes) < 2) {
            return 'Just now';
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Minute) &&
            Math.round(minutes) < 60
        ) {
            duration = minutes;
            unit = 'min';
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Hour) &&
            Math.round(hours) < 24
        ) {
            duration = hours;
            unit = RelativeDurationUnit.Hour;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Day) &&
            Math.round(days) < 7
        ) {
            duration = days;
            unit = RelativeDurationUnit.Day;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Week) &&
            Math.round(days) < 30
        ) {
            duration = days / 7;
            unit = RelativeDurationUnit.Week;
        } else if (
            allowedRelativeUnits.includes(RelativeDurationUnit.Month) &&
            Math.round(days) < 365
        ) {
            duration = days / 30;
            unit = RelativeDurationUnit.Month;
        } else {
            return localeDate;
        }

        const roundDuration = Math.round(duration);
        return `${roundDuration} ${unit}${roundDuration > 1 ? 's' : ''} ago`;
    }
}
