import {randomInteger} from '@augment-vir/browser';
import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {assign, css, html} from 'element-vir';
import {toniqElementsBookChapter} from '../../element-book/book-chapters/toniq-elements.book';
import {allIconsByCategory} from '../../icons/index';
import {toniqColors} from '../../styles';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqCarousel} from './toniq-carousel.element';

const toniqCarouselBookChapter = defineElementBookChapter({
    title: 'Toniq Carousel',
    parent: toniqElementsBookChapter,
});

const toniqCarouselBookPage = defineElementBookPage({
    title: ToniqCarousel.tagName,
    parent: toniqCarouselBookChapter,
    descriptionParagraphs: [
        'A carousel that will show multiple elements at once.',
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
                    border: 1px solid ${toniqColors.divider.foregroundColor};
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
                    border: 1px solid ${toniqColors.divider.foregroundColor};
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
                    border: 1px solid ${toniqColors.divider.foregroundColor};
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
];
