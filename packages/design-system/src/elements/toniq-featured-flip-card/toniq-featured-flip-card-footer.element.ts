import {getObjectTypedKeys, isTruthy} from '@augment-vir/common';
import {css, defineElementEvent, html, listen} from 'element-vir';
import {SocialUrls, socialUrlIcons} from '../../data';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqButton, ToniqButtonStyleEnum} from '../toniq-button/toniq-button.element';
import {
    ToniqHyperlink,
    ToniqHyperlinkLinkTypeEnum,
} from '../toniq-hyperlink/toniq-hyperlink.element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {internalFeaturedFlipCarCssVars} from './featured-flip-card-css-vars';

export const ToniqFeaturedFlipCardFooter = defineToniqElement<{
    viewMoreButtonText: string;
    viewMoreButtonUrl: string;
    flipCardButtonText: string;
    socialUrls: Readonly<SocialUrls> | undefined;
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

        ${ToniqHyperlink} ${ToniqButton} {
            width: 100%;
        }

        ${ToniqHyperlink} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${internalFeaturedFlipCarCssVars['secondary-image-size'].value};
        }
    `,
    events: {
        footerViewMoreButtonClick: defineElementEvent<void>(),
        footerFlipCardButtonClick: defineElementEvent<void>(),
    },
    renderCallback({inputs, dispatch, events}) {
        /** Saved into a separate variable for type checking purposes. */
        const socialUrls = inputs.socialUrls;

        const socialIconTemplates = socialUrls
            ? getObjectTypedKeys(socialUrls)
                  .map((socialUrlType) => {
                      const socialUrl = socialUrls[socialUrlType];
                      if (!socialUrl) {
                          return undefined;
                      }

                      const socialIcon = socialUrlIcons[socialUrlType];
                      return html`
                          <${ToniqHyperlink.assign({
                              linkType: ToniqHyperlinkLinkTypeEnum.NewTab,
                              url: socialUrl,
                          })}>
                              <${ToniqIcon.assign({icon: socialIcon})}></${ToniqIcon}>
                          </${ToniqHyperlink}>
                      `;
                  })
                  .filter(isTruthy)
            : '';

        /**
         * The .buttons and .social-urls children are reversed in order so that when it wraps, the
         * social url icons get wrapped first, not the buttons.
         */
        return html`
            <div class="buttons">
                ${inputs.viewMoreButtonUrl
                    ? html`
                          <${ToniqHyperlink.assign({
                              linkType: ToniqHyperlinkLinkTypeEnum.RouteLink,
                              url: inputs.viewMoreButtonUrl,
                              scrollToTop: true,
                          })}
                              ${listen(ToniqHyperlink.events.routeChange, () => {
                                  dispatch(new events.footerViewMoreButtonClick());
                              })}
                          >
                              <${ToniqButton.assign({
                                  text: inputs.viewMoreButtonText,
                                  buttonStyle: ToniqButtonStyleEnum.Outline,
                              })}></${ToniqButton}>
                          </${ToniqHyperlink}>
                      `
                    : html`
                          <${ToniqButton.assign({
                              text: inputs.viewMoreButtonText,
                              buttonStyle: ToniqButtonStyleEnum.Outline,
                          })}
                              ${listen('click', () => {
                                  dispatch(new events.footerViewMoreButtonClick());
                              })}
                          ></${ToniqButton}>
                      `}
                ${!!inputs.flipCardButtonText
                    ? html`
                          <${ToniqButton.assign({
                              text: inputs.flipCardButtonText,
                          })}
                              class="more-info-button"
                              ${listen('click', () => {
                                  dispatch(new events.footerFlipCardButtonClick());
                              })}
                          ></${ToniqButton}>
                      `
                    : ''}
            </div>
            <div class="social-urls">${socialIconTemplates}</div>
        `;
    },
});
