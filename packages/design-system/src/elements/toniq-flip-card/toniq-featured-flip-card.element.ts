import {getObjectTypedKeys, isTruthy} from '@augment-vir/common';
import {VirResizableImage} from '@electrovir/resizable-image-element';
import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {defineCssVars, setCssVarValue} from 'lit-css-vars';
import {ToniqButton, ToniqButtonStyleEnum, ToniqIcon, defineToniqElement} from '..';
import {SocialUrls, socialUrlIcons} from '../../data';
import {LoaderAnimated24Icon} from '../../icons';
import {toniqFontStyles} from '../../styles';
import {ToniqHyperlink} from '../toniq-hyperlink/toniq-hyperlink.element';
import {ToniqFlipCard} from './toniq-flip-card.element';

const defaultMainImageSize = 360;
const imageGap = 8;

function calculateSecondaryImageSize(mainImageSize: number): number {
    return (mainImageSize - imageGap) / 2;
}

const internalFeaturedFlipCarCssVars = defineCssVars({
    'main-image-size': defaultMainImageSize,
    'secondary-image-size': calculateSecondaryImageSize(defaultMainImageSize),
});

/** A specific version of toniq-flip-card that Toniq Labs frequently re-uses. */
export const ToniqFeaturedFlipCard = defineToniqElement<{
    title: string;
    imageUrls: ReadonlyArray<string>;
    socialUrls?: Readonly<SocialUrls> | undefined;
    /**
     * Text for the backside of the card, viewed by clicking the "More Info" button. If this is
     * empty, the "More Info" button will be hidden.
     */
    moreInfoParagraphs?: ReadonlyArray<string> | undefined;
    /**
     * The name for the "View X" button. Example: 'Collection'. If left blank, the button will
     * simply say "View".
     */
    viewMoreName?: string | undefined;
    mainImageSize?: number | undefined;
}>()({
    tagName: 'toniq-featured-flip-card',
    stateInitStatic: {
        flipped: false,
    },
    events: {
        viewButtonClicked: defineElementEvent<void>(),
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
            margin-bottom: 20px;
        }

        .card-face {
            display: flex;
            flex-direction: column;
            padding: 32px;
        }

        .all-images {
            display: flex;
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
            row-gap: ${imageGap}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${ToniqFlipCard} {
            width: 100%;
        }

        .big-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .big-image-wrapper,
        .pic-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.back {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .paragraphs {
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
    renderCallback({inputs, state, updateState, dispatch, events, host}) {
        const mainImageSize = inputs.mainImageSize || defaultMainImageSize;
        const secondaryImageSize = calculateSecondaryImageSize(mainImageSize);

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
            inputs.viewMoreName,
        ]
            .filter(isTruthy)
            .join(' ');

        const cardHeaderTemplate = html`
            <h3>${inputs.title}</h3>
        `;

        const firstImage = inputs.imageUrls[0];

        const loadingImageTemplate = html`
            <${ToniqIcon}
                slot="loading"
                ${assign(ToniqIcon, {icon: LoaderAnimated24Icon})}
            ></${ToniqIcon}>
        `;

        const firstImageTemplate = firstImage
            ? html`
                  <div class="big-image-wrapper">
                      <${VirResizableImage}
                          ${assign(VirResizableImage, {
                              imageUrl: inputs.imageUrls[0] ?? '',
                              eagerLoading: true,
                              min: {width: mainImageSize, height: mainImageSize},
                              max: {width: mainImageSize, height: mainImageSize},
                          })}
                      >
                          ${loadingImageTemplate}
                      </${VirResizableImage}>
                  </div>
              `
            : '';

        return html`
            <${ToniqFlipCard} ${assign(ToniqFlipCard, {flipped: state.flipped})}>
                <div class="card-face" slot="front">
                    ${cardHeaderTemplate}
                    <div class="all-images">
                        ${firstImageTemplate}
                        <div class="secondary-images">
                            ${inputs.imageUrls.slice(1).map((imageUrl) => {
                                return html`
                                    <div class="pic-wrapper">
                                        <${VirResizableImage}
                                            ${assign(VirResizableImage, {
                                                imageUrl: imageUrl,
                                                eagerLoading: true,
                                                min: {
                                                    width: secondaryImageSize,
                                                    height: secondaryImageSize,
                                                },
                                                max: {
                                                    width: secondaryImageSize,
                                                    height: secondaryImageSize,
                                                },
                                            })}
                                        >
                                            ${loadingImageTemplate}
                                        </${VirResizableImage}>
                                    </div>
                                `;
                            })}
                        </div>
                    </div>
                    <${ToniqFeaturedFlipCardFooter}
                        ${assign(ToniqFeaturedFlipCardFooter, {
                            viewMoreButtonText: viewMoreButtonText,
                            flipCardButtonText: inputs.moreInfoParagraphs?.length
                                ? 'More Info'
                                : undefined,
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
                        ${inputs.moreInfoParagraphs?.map(
                            (paragraph) =>
                                html`
                                    <p>${paragraph}</p>
                                `,
                        )}
                    </div>
                    <${ToniqFeaturedFlipCardFooter}
                        ${assign(ToniqFeaturedFlipCardFooter, {
                            viewMoreButtonText: viewMoreButtonText,
                            flipCardButtonText: inputs.moreInfoParagraphs?.length
                                ? 'Back'
                                : undefined,
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

const ToniqFeaturedFlipCardFooter = defineToniqElement<{
    viewMoreButtonText: string;
    flipCardButtonText?: string | undefined;
    socialUrls?: Readonly<SocialUrls> | undefined;
}>()({
    tagName: 'toniq-featured-flip-card-footer',
    styles: css`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            align-items: center;
            flex-shrink: 0;
            max-height: 48px;
            overflow: hidden;
            justify-content: space-between;
            margin-top: 24px;
            gap: 16px;
        }

        .social-urls {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 24px;
            align-items: center;
            max-height: 24px;
            overflow: hidden;
            gap: 16px;
            flex-grow: 1;
        }

        .buttons {
            display: flex;
            gap: 8px;
            flex-grow: 1;
            justify-content: flex-end;
        }

        ${ToniqButton} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${internalFeaturedFlipCarCssVars['secondary-image-size'].value} * 2);
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${internalFeaturedFlipCarCssVars['secondary-image-size'].value};
        }
    `,
    events: {
        viewMoreButtonClick: defineElementEvent<void>(),
        flipCardButtonClick: defineElementEvent<void>(),
    },
    renderCallback({inputs, dispatch, events}) {
        /** Saved into a separate variable for type checking purposes. */
        const socialUrls = inputs.socialUrls;

        const socialIconTemplates = socialUrls
            ? getObjectTypedKeys(socialUrls)
                  .filter((socialUrlType) => !!socialUrls[socialUrlType])
                  .map((socialUrlType) => {
                      const socialUrl = socialUrls[socialUrlType];
                      const socialIcon = socialUrlIcons[socialUrlType];
                      return html`
                          <${ToniqHyperlink}
                              ${assign(ToniqHyperlink, {
                                  newTab: true,
                                  url: socialUrl,
                              })}
                          >
                              <${ToniqIcon} ${assign(ToniqIcon, {icon: socialIcon})}></${ToniqIcon}>
                          </${ToniqHyperlink}>
                      `;
                  })
            : '';
        /**
         * The .buttons and .social-urls children are reversed in order so that when it wraps, the
         * social url icons get wrapped first, not the buttons.
         */
        return html`
            <div class="buttons">
                <${ToniqButton}
                    ${assign(ToniqButton, {
                        text: inputs.viewMoreButtonText,
                        buttonStyle: ToniqButtonStyleEnum.Outline,
                    })}
                    ${listen('click', () => {
                        dispatch(new events.viewMoreButtonClick());
                    })}
                ></${ToniqButton}>
                ${!!inputs.flipCardButtonText
                    ? html`
                          <${ToniqButton}
                              class="more-info-button"
                              ${assign(ToniqButton, {
                                  text: inputs.flipCardButtonText,
                              })}
                              ${listen('click', () => {
                                  dispatch(new events.flipCardButtonClick());
                              })}
                          ></${ToniqButton}>
                      `
                    : ''}
            </div>
            <div class="social-urls">${socialIconTemplates}</div>
        `;
    },
});
