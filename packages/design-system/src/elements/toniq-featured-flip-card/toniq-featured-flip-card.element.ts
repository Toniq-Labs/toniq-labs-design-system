import {isTruthy} from '@augment-vir/common';
import {HTMLTemplateResult, css, defineElementEvent, html, listen} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {ViraImage} from 'vira';
import {SocialUrls} from '../../data';
import {toniqFontStyles} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqFlipCard} from '../toniq-flip-card/toniq-flip-card.element';
import {
    calculateFeaturedFlipCardSecondaryImageSize,
    defaultFeaturedFlipCardMainImageSize,
    featuredFlipCardImageGap,
    internalFeaturedFlipCarCssVars,
} from './featured-flip-card-css-vars';
import {ToniqFeaturedFlipCardFooter} from './toniq-featured-flip-card-footer.element';

/** A specific version of toniq-flip-card that Toniq Labs frequently re-uses. */
export const ToniqFeaturedFlipCard = defineToniqElement<{
    cardTitle: string;
    imageUrls: ReadonlyArray<string>;
    socialUrls?: Readonly<Partial<SocialUrls>> | undefined;
    /**
     * Text for the backside of the card, viewed by clicking the "More Info" button. If this is
     * empty, the "More Info" button will be hidden.
     */
    infoParagraphs?: ReadonlyArray<string> | undefined;
    /**
     * The title for the "View X" button. Example: passing 'Collection' here will make the button
     * say "View Collection". If left blank, the button will simply say "View".
     */
    viewButtonTitle?: string | undefined;
    /**
     * Title of the button that flips the card. This button will only show up if there are info
     * paragraphs for the card to flip to. Defaults to "More Info".
     */
    flipCardButtonTitle?: string | undefined;
    mainImageSize?: number | undefined;
    viewMoreUrl?: string | undefined;
    /**
     * An optional callback that generates the image's template for full consumer customization.
     * This callback may return undefined to fallback to the default behavior.
     *
     * If this is not provided, the image will be simply shown without any styles.
     */
    customTemplateCallback?: ((imageUrl: string) => HTMLTemplateResult | undefined) | undefined;
}>()({
    tagName: 'toniq-featured-flip-card',
    stateInitStatic: {
        flipped: false,
    },
    events: {
        viewMoreButtonClick: defineElementEvent<void>(),
    },
    styles: css`
        :host {
            max-width: 100%;
            display: inline-flex;
            position: relative;
            flex-direction: column;
        }

        /* so that the card flip always happens in front of other elements */
        :host(:hover) {
            z-index: 10;
        }

        h3 {
            ${toniqFontStyles.h3Font};
            ${toniqFontStyles.extraBoldFont};
            margin: 0;
        }

        .card-face {
            display: flex;
            flex-direction: column;
            padding: 32px;
            height: 100%;
            box-sizing: border-box;
        }

        .all-images {
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
            max-height: ${internalFeaturedFlipCarCssVars['main-image-size'].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${internalFeaturedFlipCarCssVars['secondary-image-size'].value};
            justify-content: space-evenly;
            row-gap: ${featuredFlipCardImageGap}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${ToniqFlipCard} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${internalFeaturedFlipCarCssVars['main-image-size'].value};
            height: ${internalFeaturedFlipCarCssVars['main-image-size'].value};
        }

        .secondary-image-wrapper {
            width: ${internalFeaturedFlipCarCssVars['secondary-image-size'].value};
            height: ${internalFeaturedFlipCarCssVars['secondary-image-size'].value};
        }

        .slot-wrapper {
            height: 100%;
            width: 100%;
        }

        .main-image-wrapper > *,
        .secondary-image-wrapper > * {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper,
        .secondary-image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.front ${ToniqFeaturedFlipCardFooter} {
            margin-top: 24px;
        }

        .card-face.back ${ToniqFeaturedFlipCardFooter} {
            margin-top: 4px;
        }

        .card-face.front h3 {
            margin-bottom: 20px;
        }

        .card-face.back h3 {
            margin-bottom: 4px;
        }

        .card-face.back {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .paragraphs {
            padding: 4px 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
            ${toniqFontStyles.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,
    renderCallback({inputs, state, updateState, host, dispatch, events}) {
        const mainImageSize: number = inputs.mainImageSize || defaultFeaturedFlipCardMainImageSize;
        const secondaryImageSize = calculateFeaturedFlipCardSecondaryImageSize(mainImageSize);

        setCssVarValue({
            onElement: host,
            forCssVar: internalFeaturedFlipCarCssVars['main-image-size'],
            toValue: `${mainImageSize}px`,
        });
        setCssVarValue({
            onElement: host,
            forCssVar: internalFeaturedFlipCarCssVars['secondary-image-size'],
            toValue: `${secondaryImageSize}px`,
        });

        const viewMoreButtonText = [
            'View',
            inputs.viewButtonTitle,
        ]
            .filter(isTruthy)
            .join(' ');

        const cardHeaderTemplate = html`
            <h3>${inputs.cardTitle}</h3>
        `;

        const firstImage = inputs.imageUrls[0];

        const firstImageTemplate = firstImage
            ? html`
                  <div class="main-image-wrapper">
                      ${inputs.customTemplateCallback?.(firstImage) ||
                      html`
                          <${ViraImage.assign({
                              imageUrl: firstImage,
                          })}></${ViraImage}>
                      `}
                  </div>
              `
            : '';

        return html`
            <${ToniqFlipCard.assign({flipped: state.flipped})}
                ${listen(ToniqFeaturedFlipCardFooter.events.viewMoreButtonClick, () => {
                    dispatch(new events.viewMoreButtonClick());
                })}
            >
                <div class="card-face front" slot="front">
                    ${cardHeaderTemplate}
                    <div class="all-images">
                        ${firstImageTemplate}
                        <div class="secondary-images">
                            ${inputs.imageUrls.slice(1).map((imageUrl) => {
                                return html`
                                    <div class="secondary-image-wrapper">
                                        ${inputs.customTemplateCallback?.(imageUrl) ||
                                        html`
                                            <${ViraImage.assign({
                                                imageUrl,
                                            })}></${ViraImage}>
                                        `}
                                    </div>
                                `;
                            })}
                        </div>
                    </div>
                    <${ToniqFeaturedFlipCardFooter.assign({
                        viewMoreButtonText,
                        flipCardButtonText: inputs.infoParagraphs?.length
                            ? inputs.flipCardButtonTitle || 'More Info'
                            : '',
                        viewMoreButtonUrl: inputs.viewMoreUrl || '',
                        socialUrls: inputs.socialUrls,
                    })}
                        ${listen(ToniqFeaturedFlipCardFooter.events.flipCardButtonClick, () => {
                            updateState({
                                flipped: !state.flipped,
                            });
                        })}
                    ></${ToniqFeaturedFlipCardFooter}>
                </div>
                <div class="card-face back" slot="back">
                    ${cardHeaderTemplate}
                    <div class="paragraphs">
                        ${inputs.infoParagraphs?.map(
                            (paragraph) => html`
                                <p>${paragraph}</p>
                            `,
                        )}
                    </div>
                    <${ToniqFeaturedFlipCardFooter.assign({
                        viewMoreButtonText,
                        flipCardButtonText: inputs.infoParagraphs?.length ? 'Back' : '',
                        viewMoreButtonUrl: inputs.viewMoreUrl || '',
                        socialUrls: inputs.socialUrls,
                    })}
                        ${listen(ToniqFeaturedFlipCardFooter.events.flipCardButtonClick, () => {
                            updateState({
                                flipped: !state.flipped,
                            });
                        })}
                    ></${ToniqFeaturedFlipCardFooter}>
                </div>
            </${ToniqFlipCard}>
        `;
    },
});
