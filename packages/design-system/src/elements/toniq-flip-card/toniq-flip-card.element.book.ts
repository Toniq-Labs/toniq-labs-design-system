import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {emptySocialUrls} from '../../data/social-urls';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {ToniqFeaturedFlipCard} from './toniq-featured-flip-card.element';
import {ToniqFlipCard} from './toniq-flip-card.element';

const toniqFlipCardBookChapter = defineElementBookChapter({
    title: 'Flip Card',
    parent: elementsBookChapter,
});

const imageUrls = Array(30).fill('/toniq-labs-logo.png');
const moreInfoParagraphs = [
    'Hello there.',
    'There is stuff here.',
];
const longMoreInfoParagraphs = moreInfoParagraphs.concat(Array(30).fill(moreInfoParagraphs));

const toniqFeaturedFlipCardBookPage = defineElementBookPage({
    title: ToniqFeaturedFlipCard.tagName,
    parent: toniqFlipCardBookChapter,
    examples: [
        createExample({
            title: 'basic',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }
            `,
            stateInit: {
                flipped: false,
            },
            render() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            moreInfoParagraphs: longMoreInfoParagraphs,
                            imageUrls,
                            socialUrls: emptySocialUrls,
                            title: 'Featured Stuff',
                            viewName: 'Stuff',
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        }),
        createExample({
            title: 'with missing inputs',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }
            `,
            stateInit: {
                flipped: false,
            },
            render() {
                return html`
                    <${ToniqFeaturedFlipCard}
                        ${assign(ToniqFeaturedFlipCard, {
                            imageUrls,
                            title: 'Featured Stuff',
                        })}
                    ></${ToniqFeaturedFlipCard}>
                `;
            },
        }),
        createExample({
            title: 'smaller',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }

                ${ToniqFeaturedFlipCard} {
                    width: 1000px;
                }
            `,
            stateInit: {
                flipped: false,
            },
            render() {
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
        }),
    ],
});

const toniqFlipCardBookPage = defineElementBookPage({
    title: ToniqFlipCard.tagName,
    parent: toniqFlipCardBookChapter,
    examples: [
        createExample({
            title: 'basic',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }
            `,
            stateInit: {
                flipped: false,
            },
            render({state, updateState}) {
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
        }),
    ],
});

export const toniqFlipCardBookEntries = [
    toniqFlipCardBookChapter,
    toniqFlipCardBookPage,
    toniqFeaturedFlipCardBookPage,
];
