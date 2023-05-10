import {randomInteger} from '@augment-vir/browser';
import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {elementsBookChapter} from '../../element-book/book-chapters/elements.book';
import {allIconsByCategory} from '../../icons/index';
import {toniqColors} from '../../styles';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqCarousel} from './toniq-carousel.element';

const toniqCarouselBookChapter = defineElementBookChapter({
    title: 'Carousel',
    parent: elementsBookChapter,
});

const toniqCarouselBookPage = defineElementBookPage({
    title: ToniqCarousel.tagName,
    parent: toniqCarouselBookChapter,
    descriptionParagraphs: [
        'A carousel that can show multiple elements at once.',
        'Automatic scrolling is optional.',
    ],
    examples: [
        createExample({
            title: 'short and fast',
            styles: css`
                :host {
                    max-width: 100%;
                }

                ${ToniqCarousel} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,
            render() {
                return html`
                    <${ToniqCarousel}
                        ${assign(ToniqCarousel, {
                            enableAutomaticCycling: true,
                            cycleIntervalMs: 1000,
                            templates: allIconsByCategory['core-24'].map((icon) => {
                                const styles = css`
                                    padding: 24px;
                                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;

                                return html`
                                    <${ToniqIcon}
                                        style=${styles}
                                        ${assign(ToniqIcon, {icon})}
                                    ></${ToniqIcon}>
                                `;
                            }),
                        })}
                    ></${ToniqCarousel}>
                `;
            },
        }),
        createExample({
            title: 'tall',
            styles: css`
                :host {
                    max-width: 100%;
                }

                ${ToniqCarousel} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,
            render() {
                return html`
                    <${ToniqCarousel}
                        ${assign(ToniqCarousel, {
                            enableAutomaticCycling: true,
                            templates: allIconsByCategory['core-24'].map((icon) => {
                                const styles = css`
                                    padding: 100px 24px;
                                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;

                                return html`
                                    <${ToniqIcon}
                                        style=${styles}
                                        ${assign(ToniqIcon, {icon})}
                                    ></${ToniqIcon}>
                                `;
                            }),
                        })}
                    ></${ToniqCarousel}>
                `;
            },
        }),
        createExample({
            title: 'random sizes',
            styles: css`
                :host {
                    max-width: 100%;
                }

                ${ToniqCarousel} {
                    width: 800px;
                    max-width: 100%;
                    border-radius: 8px;
                }
            `,
            render() {
                return html`
                    <${ToniqCarousel}
                        ${assign(ToniqCarousel, {
                            enableAutomaticCycling: true,
                            cycleIntervalMs: 1000,
                            templates: allIconsByCategory['core-24'].map((icon) => {
                                const paddingX = randomInteger({min: 0, max: 150});
                                const styles = css`
                                    padding: 100px ${paddingX}px;
                                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;

                                return html`
                                    <${ToniqIcon}
                                        style=${styles}
                                        ${assign(ToniqIcon, {icon})}
                                    ></${ToniqIcon}>
                                `;
                            }),
                        })}
                    ></${ToniqCarousel}>
                `;
            },
        }),
    ],
});

const toniqCarouselBannerBookPage = defineElementBookPage({
    title: ToniqCarousel.hostClasses['banner-style'],
    parent: toniqCarouselBookChapter,
    descriptionParagraphs: [
        `${ToniqCarousel.tagName} style for a single, full-width element.`,
    ],
    examples: [
        createExample({
            title: ToniqCarousel.hostClasses['banner-style'],
            styles: css`
                :host {
                    max-width: 100%;
                }

                ${ToniqCarousel} {
                    max-width: 100%;
                    width: 800px;
                    border-radius: 8px;
                    ${ToniqCarousel.cssVarNames['arrow-margin']}: 16px;
                }
            `,
            render() {
                return html`
                    <${ToniqCarousel}
                        class=${ToniqCarousel.hostClasses['banner-style']}
                        ${assign(ToniqCarousel, {
                            enableAutomaticCycling: true,
                            templates: allIconsByCategory['core-24'].map((icon) => {
                                const styles = css`
                                    /* make sure this width matches the ToniqCarousel width */
                                    width: 800px;
                                    max-width: 100%;
                                    padding: 100px 0;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    box-sizing: border-box;
                                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                    border-radius: 12px;
                                `;

                                return html`
                                    <${ToniqIcon}
                                        style=${styles}
                                        ${assign(ToniqIcon, {icon})}
                                    ></${ToniqIcon}>
                                `;
                            }),
                        })}
                    ></${ToniqCarousel}>
                `;
            },
        }),
    ],
});

export const toniqCarouselBookEntries = [
    toniqCarouselBookChapter,
    toniqCarouselBookPage,
    toniqCarouselBannerBookPage,
];
