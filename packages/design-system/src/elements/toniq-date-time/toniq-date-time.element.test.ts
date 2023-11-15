import {itCases} from '@augment-vir/browser-testing';
import {fixture as renderFixture} from '@open-wc/testing';
import {
    DurationUnit,
    calculateRelativeDate,
    createFullDate,
    timezones,
    utcTimezone,
} from 'date-vir';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ToniqDateTime} from './toniq-date-time.element';

async function testDateTimeContents(inputs: typeof ToniqDateTime.inputsType): Promise<{
    content: string;
    title: string;
}> {
    const fixture = await renderFixture(html`
        <${ToniqDateTime.assign(inputs)}></${ToniqDateTime}>
    `);

    assertInstanceOf(fixture, ToniqDateTime);

    const innerSpan = fixture.shadowRoot.querySelector('span');
    assertInstanceOf(innerSpan, HTMLSpanElement);

    return {
        content: innerSpan.textContent || '',
        title: innerSpan.title,
    };
}

describe(ToniqDateTime.tagName, () => {
    const utcDate = createFullDate(1234567891011, utcTimezone);
    const africaDate = createFullDate(1234567891011, timezones['Africa/Banjul']);
    const longAgoAfricaDate = createFullDate(934567891011, timezones['Africa/Banjul']);

    itCases(testDateTimeContents, [
        {
            it: 'formats date and time in UTC',
            input: {
                fullDate: utcDate,
                parts: {
                    date: true,
                    time: true,
                },
            },
            expect: {
                content: 'Feb 13, 2009 11:31 PM',
                title: '2009-02-13 23:31:31 (UTC)',
            },
        },
        {
            it: 'formats date in UTC',
            input: {
                fullDate: utcDate,
                parts: {
                    date: true,
                    time: false,
                },
            },
            expect: {
                content: 'Feb 13, 2009',
                title: '2009-02-13 23:31:31 (UTC)',
            },
        },
        {
            it: 'formats time in UTC',
            input: {
                fullDate: utcDate,
                parts: {
                    date: false,
                    time: true,
                },
            },
            expect: {
                content: '11:31 PM',
                title: '2009-02-13 23:31:31 (UTC)',
            },
        },
        {
            it: 'formats date and time in other time zone',
            input: {
                fullDate: createFullDate(1234567891011, timezones['Africa/Banjul']),
                parts: {
                    date: true,
                    time: true,
                },
            },
            expect: {
                content: 'Feb 13, 2009 11:31 PM',
                title: '2009-02-13 23:31:31 (Africa/Banjul)',
            },
        },
        {
            it: 'uses relative before date',
            input: {
                fullDate: calculateRelativeDate(africaDate, {weeks: -1}),
                parts: {
                    date: true,
                    time: true,
                },
                relativeOptions: {
                    tryRelative: true,
                    relativeTo: africaDate,
                },
            },
            expect: {
                content: 'a week ago',
                title: '2009-02-06 23:31:31 (Africa/Banjul)',
            },
        },
        {
            it: 'uses relative after date',
            input: {
                fullDate: calculateRelativeDate(africaDate, {months: 1}),
                parts: {
                    date: true,
                    time: true,
                },
                relativeOptions: {
                    tryRelative: true,
                    relativeTo: africaDate,
                },
            },
            expect: {
                content: 'in a month',
                title: '2009-03-13 23:31:31 (Africa/Banjul)',
            },
        },
        {
            it: 'defaults to the string parts',
            input: {
                fullDate: africaDate,
                parts: {
                    date: true,
                    time: false,
                },
                relativeOptions: {
                    tryRelative: true,
                    relativeTo: africaDate,
                },
            },
            expect: {
                content: 'just now',
                title: '2009-02-13 23:31:31 (Africa/Banjul)',
            },
        },
        {
            it: 'uses long time ago relative date',
            input: {
                fullDate: longAgoAfricaDate,
                parts: {
                    date: true,
                    time: false,
                },
                relativeOptions: {
                    tryRelative: true,
                    relativeTo: africaDate,
                },
            },
            expect: {
                content: 'Aug 13, 1999',
                title: '1999-08-13 18:11:31 (Africa/Banjul)',
            },
        },
        {
            it: 'defaults to the string parts if too long ago',
            input: {
                fullDate: longAgoAfricaDate,
                parts: {
                    date: true,
                    time: false,
                },
                relativeOptions: {
                    tryRelative: true,
                    relativeTo: africaDate,
                    blockedRelativeUnits: [
                        DurationUnit.Years,
                        DurationUnit.Quarters,
                    ],
                    limitUnitMax: true,
                },
            },
            expect: {
                content: 'Aug 13, 1999',
                title: '1999-08-13 18:11:31 (Africa/Banjul)',
            },
        },
    ]);
});
