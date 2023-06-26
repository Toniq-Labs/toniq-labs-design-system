import {defineBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {emptySocialUrls} from '../../data/social-urls';
import {createElementBookUrl} from '../../element-book/book-helpers/create-element-book-url';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqFeaturedFlipCard} from './toniq-featured-flip-card.element';

const imageUrls = Array(30).fill(createElementBookUrl('/toniq-labs-logo.png'));
const infoParagraphs = [
    'Hello there.',
    'There is stuff here.',
];
const longInfoParagraphs = infoParagraphs.concat(Array(30).fill(infoParagraphs));

export const toniqFeaturedFlipCardBookPage = defineBookPage({
    title: ToniqFeaturedFlipCard.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            infoParagraphs: longInfoParagraphs,
                            imageUrls,
                            socialUrls: emptySocialUrls,
                            title: 'Featured Stuff',
                            viewButtonTitle: 'Stuff',
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
        defineExample({
            title: 'with missing inputs',
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls,
                            title: 'Featured Stuff',
                            infoParagraphs: undefined,
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
        defineExample({
            title: 'hyperlink view button',
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls: [],
                            title: 'Featured Stuff',
                            infoParagraphs: longInfoParagraphs,
                            viewMoreUrl: 'https://toniqlabs.com',
                        })}
                        ${listen(ToniqFeaturedFlipCard.events.viewMoreButtonClick, () => {
                            console.info('view more clicked');
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
        defineExample({
            title: 'min height',
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls: [],
                            title: 'Featured Stuff',
                            infoParagraphs: longInfoParagraphs,
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
        defineExample({
            title: 'with custom height',
            styles: css`
                ${ToniqFeaturedFlipCard} {
                    height: 300px;
                }
            `,
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls: [],
                            title: 'Featured Stuff',
                            infoParagraphs: longInfoParagraphs,
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
        defineExample({
            title: 'smaller',
            styles: css`
                ${ToniqFeaturedFlipCard} {
                    width: 1000px;
                }
            `,
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls,
                            infoParagraphs,
                            title: 'Featured Stuff',
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
    },
});
