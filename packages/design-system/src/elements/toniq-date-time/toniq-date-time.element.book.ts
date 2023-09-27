import {getNowInUserTimezone} from 'date-vir';
import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqDateTime} from './toniq-date-time.element';

export const toniqDateTimeBookPage = defineBookPage({
    title: ToniqDateTime.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Display a date and / or time in a consistent manner.',
    ],
    elementExamplesCallback({defineExample}) {
        const examples: ReadonlyArray<{
            title: string;
            inputs: Omit<typeof ToniqDateTime.inputsType, 'fullDate'>;
        }> = [
            {
                title: 'date and time',
                inputs: {
                    parts: {
                        date: true,
                        time: true,
                    },
                },
            },
            {
                title: 'date only',
                inputs: {
                    parts: {
                        date: true,
                        time: false,
                    },
                },
            },
            {
                title: 'time only',
                inputs: {
                    parts: {
                        date: false,
                        time: true,
                    },
                },
            },
        ];

        const dateToUse = getNowInUserTimezone();

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                renderCallback() {
                    return html`
                        <${ToniqDateTime.assign({
                            fullDate: dateToUse,
                            ...example.inputs,
                        })}></${ToniqDateTime}>
                    `;
                },
            });
        });
    },
});
