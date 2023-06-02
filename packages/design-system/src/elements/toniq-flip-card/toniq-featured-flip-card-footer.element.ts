import {getObjectTypedKeys} from '@augment-vir/common';
import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {SocialUrls, socialUrlIcons} from '../../data';
import {
    ToniqButton,
    ToniqButtonStyleEnum,
    ToniqHyperlink,
    ToniqIcon,
    defineToniqElement,
} from '../../elements';
import {internalFeaturedFlipCarCssVars} from './featured-flip-card-css-vars';

export const ToniqFeaturedFlipCardFooter = defineToniqElement<{
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
