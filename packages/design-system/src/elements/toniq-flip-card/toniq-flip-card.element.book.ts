import {defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {emptySocialUrls} from '../../data/social-urls';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {createElementBookUrl} from '../../element-book/book-helpers/create-element-book-url';
import {ToniqFeaturedFlipCard} from './toniq-featured-flip-card.element';
import {ToniqFlipCard} from './toniq-flip-card.element';

const toniqFlipCardBookChapter = defineElementBookChapter({
    title: 'Flip Card',
    parent: elementsBookChapter,
});

const imageUrls = Array(30).fill(createElementBookUrl('/toniq-labs-logo.png'));
const moreInfoParagraphs = [
    'Hello there.',
    'There is stuff here.',
];
const longMoreInfoParagraphs = moreInfoParagraphs.concat(Array(30).fill(moreInfoParagraphs));

const toniqFeaturedFlipCardBookPage = defineElementBookPage({
    title: ToniqFeaturedFlipCard.tagName,
    parent: toniqFlipCardBookChapter,
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            stateInitStatic: {
                flipped: false,
            },
            renderCallback() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            moreInfoParagraphs: longMoreInfoParagraphs,
                            imageUrls,
                            socialUrls: emptySocialUrls,
                            title: 'Featured Stuff',
                            viewMoreName: 'Stuff',
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
                            moreInfoParagraphs: undefined,
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
                            moreInfoParagraphs: longMoreInfoParagraphs,
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
                            moreInfoParagraphs: longMoreInfoParagraphs,
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
                            moreInfoParagraphs,
                            title: 'Featured Stuff',
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        });
    },
});

const toniqFlipCardBookPage = defineElementBookPage({
    title: ToniqFlipCard.tagName,
    parent: toniqFlipCardBookChapter,
    defineExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }
            `,
            stateInitStatic: {
                flipped: false,
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqFlipCard}
                        ${assign(ToniqFlipCard, {
                            flipped: state.flipped,
                        })}
                        ${listen(ToniqFlipCard.events.flippedChange, (event) => {
                            updateState({flipped: event.detail});
                        })}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${ToniqFlipCard}>
                `;
            },
        });
    },
});

export const toniqFlipCardBookEntries = [
    toniqFlipCardBookChapter,
    toniqFlipCardBookPage,
    toniqFeaturedFlipCardBookPage,
];
