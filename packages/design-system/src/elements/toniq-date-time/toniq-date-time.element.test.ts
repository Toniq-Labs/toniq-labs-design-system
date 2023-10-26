import {itCases} from '@augment-vir/browser-testing';
import {fixture as renderFixture} from '@open-wc/testing';
import {createFullDate, timezones, utcTimezone} from 'date-vir';
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
                title: 'Feb 13, 2009 11:31 PM (UTC)',
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
                title: 'Feb 13, 2009 11:31 PM (UTC)',
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
                title: 'Feb 13, 2009 11:31 PM (UTC)',
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
                title: 'Feb 13, 2009 11:31 PM (Africa/Banjul)',
            },
        },
    ]);
});
