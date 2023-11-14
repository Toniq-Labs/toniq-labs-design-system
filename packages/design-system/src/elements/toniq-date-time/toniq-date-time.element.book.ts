import {calculateRelativeDate, getNowInUserTimezone} from 'date-vir';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {RelativeDurationUnit} from '../../augments/date';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqDateTime} from './toniq-date-time.element';

export const toniqDateTimeBookPage = defineBookPage({
    title: ToniqDateTime.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Display a date and / or time in a consistent manner.',
    ],
    elementExamplesCallback({defineExample}) {
        const dateToUse = getNowInUserTimezone();

        const examples: ReadonlyArray<{
            title: string;
            inputs: typeof ToniqDateTime.inputsType;
        }> = [
            {
                title: 'date and time',
                inputs: {
                    fullDate: dateToUse,
                    parts: {
                        date: true,
                        time: true,
                    },
                },
            },
            {
                title: 'date only',
                inputs: {
                    fullDate: dateToUse,
                    parts: {
                        date: true,
                        time: false,
                    },
                },
            },
            {
                title: 'time only',
                inputs: {
                    fullDate: dateToUse,
                    parts: {
                        date: false,
                        time: true,
                    },
                },
            },
            {
                title: 'humanize in before date',
                inputs: {
                    fullDate: calculateRelativeDate(dateToUse, {weeks: -1}),
                    parts: {
                        date: true,
                        time: true,
                    },
                    relativeUnits: true,
                },
            },
            {
                title: 'humanize in after date',
                inputs: {
                    fullDate: calculateRelativeDate(dateToUse, {months: 1}),
                    parts: {
                        date: true,
                        time: true,
                    },
                    relativeUnits: true,
                },
            },
            {
                title: 'humanize with custom relative unit',
                inputs: {
                    fullDate: calculateRelativeDate(dateToUse, {days: -2}),
                    parts: {
                        date: true,
                        time: true,
                    },
                    relativeUnits: [
                        RelativeDurationUnit.Day,
                        RelativeDurationUnit.Hour,
                        RelativeDurationUnit.Minute,
                    ],
                },
            },
        ];

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                renderCallback() {
                    return html`
                        <${ToniqDateTime.assign({
                            ...example.inputs,
                        })}></${ToniqDateTime}>
                    `;
                },
            });
        });
    },
});
