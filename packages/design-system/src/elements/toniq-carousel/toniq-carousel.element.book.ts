import {randomInteger} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {allIconsByCategory} from '../../icons/index';
import {toniqColors} from '../../styles';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqCarousel, ToniqCarouselVariantEnum} from './toniq-carousel.element';

const exampleStyles = css`
    :host {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ${ToniqCarousel} {
        width: 800px;
        max-width: 100%;
        border-radius: 8px;
    }
`;

export const toniqCarouselBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqCarousel.tagName,
    descriptionParagraphs: [
        'Carousel that uses native scroll APIs.',
        'Supports differently sized elements, optional automatic scrolling, manual mouse or touch scrolling, click scrolling with buttons, etc.',
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'default',
            styles: exampleStyles,
            renderCallback() {
                return html`
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: true,
                        cycleIntervalMs: 1000,
                        templates: allIconsByCategory['core-24'].map((icon) => {
                            const styles = css`
                                padding: 24px;
                                border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;

                            return html`
                                <${ToniqIcon.assign({icon})} style=${styles}></${ToniqIcon}>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: true,
                        templates: allIconsByCategory['core-24'].map((icon) => {
                            const styles = css`
                                padding: 100px 24px;
                                border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;

                            return html`
                                <${ToniqIcon.assign({icon})} style=${styles}></${ToniqIcon}>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                    <${ToniqCarousel.assign({
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
                                <${ToniqIcon.assign({icon})} style=${styles}></${ToniqIcon}>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                `;
            },
        });

        defineExample({
            title: 'banner style',
            styles: exampleStyles,
            renderCallback() {
                const wrapperDivStyles = css`
                    /* make sure this width matches the ToniqCarousel width */
                    width: 800px;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;
                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                    border-radius: 12px;
                `;

                return html`
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: true,
                        variant: ToniqCarouselVariantEnum.Banner,
                        templates: allIconsByCategory['core-24'].map((icon) => {
                            return html`
                                <div style=${wrapperDivStyles}>
                                    <${ToniqIcon.assign({icon})}></${ToniqIcon}>
                                </div>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: true,
                        variant: ToniqCarouselVariantEnum.Banner,
                        templates: [allIconsByCategory['core-24'][0]].map((icon) => {
                            return html`
                                <div style=${wrapperDivStyles}>
                                    <${ToniqIcon.assign({icon})}></${ToniqIcon}>
                                </div>
                            `;
                        }),
                    })}
                        class=${ToniqCarousel.hostClasses['toniq-carousel-banner-variant']}
                    ></${ToniqCarousel}>
                `;
            },
        });

        defineExample({
            title: 'offset arrows',
            styles: exampleStyles,
            renderCallback() {
                const wrapperDivStyles = css`
                    /* make sure this width matches the ToniqCarousel width */
                    width: 800px;
                    max-width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    box-sizing: border-box;
                    border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                    border-radius: 12px;
                `;

                return html`
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: false,
                        offsetArrows: true,
                        cycleIntervalMs: 1000,
                        templates: allIconsByCategory['core-24'].map((icon) => {
                            const styles = css`
                                padding: 24px;
                                border: 1px solid ${toniqColors.pageInteraction.foregroundColor};
                                border-radius: 12px;
                            `;

                            return html`
                                <${ToniqIcon.assign({icon})} style=${styles}></${ToniqIcon}>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                    <${ToniqCarousel.assign({
                        enableAutomaticCycling: false,
                        offsetArrows: true,
                        variant: ToniqCarouselVariantEnum.Banner,
                        templates: allIconsByCategory['core-24'].map((icon) => {
                            return html`
                                <div style=${wrapperDivStyles}>
                                    <${ToniqIcon.assign({icon})}></${ToniqIcon}>
                                </div>
                            `;
                        }),
                    })}></${ToniqCarousel}>
                `;
            },
        });
    },
});
