import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
import {StatusFailure24Icon, ViraImage, ViraImageSlotNameEnum, viraIconCssVars} from 'vira';
import {emptySocialUrls} from '../../data/social-urls';
import {createElementBookUrl} from '../../element-book/book-helpers/create-element-book-url';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {LoaderAnimated24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
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
                    <${ToniqFeaturedFlipCard.assign({
                        infoParagraphs: longInfoParagraphs,
                        imageUrls,
                        socialUrls: emptySocialUrls,
                        title: 'Featured Stuff',
                        viewButtonTitle: 'Stuff',
                    })}></${ToniqFeaturedFlipCard}>
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls,
                        title: 'Featured Stuff',
                        infoParagraphs: undefined,
                    })}></${ToniqFeaturedFlipCard}>
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
                    <${ToniqFeaturedFlipCard.assign({
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls: [],
                        title: 'Featured Stuff',
                        infoParagraphs: longInfoParagraphs,
                    })}></${ToniqFeaturedFlipCard}>
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls: [],
                        title: 'Featured Stuff',
                        infoParagraphs: longInfoParagraphs,
                    })}></${ToniqFeaturedFlipCard}>
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls,
                        infoParagraphs,
                        title: 'Featured Stuff',
                    })}></${ToniqFeaturedFlipCard}>
                `;
            },
        });

        defineExample({
            title: 'with custom template',
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls,
                        infoParagraphs,
                        title: 'With custom Template',
                        customTemplateCallback(imageUrl) {
                            return html`
                                <${ViraImage.assign({
                                    imageUrl,
                                })}></${ViraImage}>
                            `;
                        },
                    })}></${ToniqFeaturedFlipCard}>
                `;
            },
        });

        defineExample({
            title: 'with custom template statuses',
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
                    <${ToniqFeaturedFlipCard.assign({
                        imageUrls: imageUrls.map((originalUrl, index) => {
                            if (index % 2) {
                                return '/invalid-image.png';
                            } else {
                                return originalUrl;
                            }
                        }),
                        infoParagraphs,
                        title: 'With custom Template Statuses',
                        customTemplateCallback(imageUrl) {
                            return html`
                                <${ViraImage.assign({
                                    imageUrl,
                                    _debugLoadDelay: imageUrl.includes('invalid-image')
                                        ? undefined
                                        : {milliseconds: Infinity},
                                })}>
                                    <div
                                        slot=${ViraImageSlotNameEnum.Loading}
                                        class="icon-wrapper"
                                        style=${css`
                                            background-color: #f0faff;
                                            box-sizing: border-box;
                                            border-radius: 16px;
                                            width: 100%;
                                            height: 100%;
                                            max-width: 100%;
                                            border: 2px solid blue;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            color: blue;
                                        `}
                                    >
                                        <${ToniqIcon.assign({
                                            icon: LoaderAnimated24Icon,
                                            fitContainer: true,
                                        })}
                                            style=${css`
                                                width: 100%;
                                                height: 100%;
                                            `}
                                        ></${ToniqIcon}>
                                    </div>
                                    <div
                                        slot=${ViraImageSlotNameEnum.Error}
                                        class="icon-wrapper"
                                        style=${css`
                                            background-color: #fff0f0;
                                            box-sizing: border-box;
                                            border-radius: 16px;
                                            width: 100%;
                                            height: 100%;
                                            max-width: 100%;
                                            border: 2px solid red;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            color: red;
                                        `}
                                    >
                                        <${ToniqIcon.assign({
                                            icon: StatusFailure24Icon,
                                            fitContainer: true,
                                        })}
                                            style=${css`
                                                ${viraIconCssVars['vira-icon-fill-color']
                                                    .name}: transparent;
                                            `}
                                        ></${ToniqIcon}>
                                    </div>
                                </${ViraImage}>
                            `;
                        },
                    })}></${ToniqFeaturedFlipCard}>
                `;
            },
        });
    },
});
