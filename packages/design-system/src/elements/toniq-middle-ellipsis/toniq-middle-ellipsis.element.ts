import {classMap, css, defineElementEvent, html, ifDefined, listen, renderIf} from 'element-vir';
import {noNativeFormStyles} from 'vira';
import {copyToClipboard} from '../../clipboard';
import {Copy24Icon, ExternalLink24Icon, ToniqSvg} from '../../icons';
import {toniqDurations} from '../../styles/animation';
import {toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ellipsisCharacter = '…' as const;

function truncateInMiddle(fullString: string, letterCount: number): string {
    const start = fullString.slice(0, letterCount).trim();
    const end = fullString.slice(-1 * letterCount).trim();
    return `${start}${ellipsisCharacter}${end}`;
}

function isWholeNumber(input: number): boolean {
    return !(input % 1);
}

function validateLetterCount(inputs: {letterCount?: number | undefined}): number {
    if (inputs.letterCount == undefined) {
        return 4;
    }

    // make sure that the letter count is a whole number
    if (!isWholeNumber(inputs.letterCount)) {
        return Math.floor(inputs.letterCount);
    }
    // make sure that at least one letter is allowed. Funny things happen when this is less than one!
    if (inputs.letterCount < 1) {
        return 1;
    }

    return inputs.letterCount;
}

/**
 * This element takes text and truncates it in the middle, so the start and end characters are
 * visible. Text that isn't too long won't be truncated.
 *
 * Examples:
 *
 * - This-is-really-long-text -> This…text (truncated)
 * - Short-text -> Short-text (not truncated)
 *
 * This doesn't try to do any kind of dynamic ellipsis with CSS, it truncates the text before even
 * rendering it to the DOM.
 */
export const ToniqMiddleEllipsis = defineToniqElement<
    {
        text?: string | undefined;
        /**
         * Determines how many letter render before the truncation ellipsis. The same number of
         * letters are also rendered after the ellipsis.
         */
        letterCount?: number | undefined;
    } & (
        | {
              /**
               * Support optional specific behavior where an icon shows up that, when clicked,
               * copies the whole text to the user's clipboard.
               */
              copyOnClick?: boolean;
              externalLink?: undefined;
          }
        | {
              copyOnClick?: undefined;
              externalLink?: string;
          }
    )
>()({
    tagName: 'toniq-middle-ellipsis',
    events: {
        copy: defineElementEvent<void>(),
    },
    cssVars: {
        'toniq-middle-ellipsis-text-color': toniqColors.pagePrimary.foregroundColor,
        'toniq-middle-ellipsis-icon-color': toniqColors.pagePrimary.foregroundColor,
        'toniq-middle-ellipsis-text-hover-color': toniqColors.pageInteraction.foregroundColor,
        'toniq-middle-ellipsis-icon-hover-color': toniqColors.pageInteraction.foregroundColor,
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            /* 5 frames at 60 fps */
            transition: ${toniqDurations.interaction};
            ${toniqFontStyles.paragraphFont};
            color: ${cssVars['toniq-middle-ellipsis-text-color'].value};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.${hostClasses['toniq-middle-ellipsis-clickable'].name}:hover) {
            color: ${cssVars['toniq-middle-ellipsis-text-hover-color'].value};
        }

        :host(.${hostClasses['toniq-middle-ellipsis-clickable'].name}:hover) ${ToniqIcon} {
            color: ${cssVars['toniq-middle-ellipsis-icon-hover-color'].value};
        }

        ${ToniqIcon} {
            margin-left: 4px;
            color: ${cssVars['toniq-middle-ellipsis-icon-color'].value};
        }

        .copyable {
            cursor: pointer;
        }

        a {
            color: inherit;
            text-decoration: none;
            border-radius: 8px;
            position: relative;
            outline: none;
        }
        a:visited {
            color: inherit;
        }

        button {
            ${noNativeFormStyles};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${createFocusStyles({
            mainSelector: 'button:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
        })}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${toniqColors.pagePrimary.backgroundColor};
            background-color: ${toniqColors.pagePrimary.backgroundColor};
            display: flex;
            position: absolute;
            height: 100%;
            right: 0;
            max-width: 100%;
            pointer-events: none;
            transition: opacity ${toniqDurations.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,
    hostClasses: {
        'toniq-middle-ellipsis-clickable': ({inputs}) =>
            !!inputs.externalLink || !!inputs.copyOnClick,
    },
    stateInitStatic: {
        showCopiedTextTimeoutId: undefined as number | undefined,
    },
    renderCallback({inputs, dispatch, events, state, updateState}) {
        if (!inputs.text) {
            return html``;
        }

        const fullText = inputs.text;

        const letterCount = validateLetterCount(inputs);

        const isLink: boolean = !!inputs.externalLink;
        const shouldCopy: boolean = !!inputs.copyOnClick;

        const textTooLong = fullText.length > letterCount * 2 + 2;
        const renderText = textTooLong ? truncateInMiddle(fullText, letterCount) : fullText;
        const hoverText = textTooLong ? fullText : '';
        const icon: ToniqSvg | undefined = isLink
            ? ExternalLink24Icon
            : shouldCopy
              ? Copy24Icon
              : undefined;

        const iconTemplate = icon
            ? html`
                  <${ToniqIcon.assign({icon})}></${ToniqIcon}>
              `
            : '';

        const textTemplate = html`
            <span title=${hoverText} class="text-content">
                ${renderIf(
                    !!inputs.copyOnClick,
                    html`
                        <span
                            class=${classMap({
                                'copied-text': true,
                                'show-copied-text': state.showCopiedTextTimeoutId != undefined,
                            })}
                        >
                            Copied!
                        </span>
                    `,
                )}
                ${renderText}
            </span>
        `;

        if (renderText) {
            if (isLink) {
                return html`
                    <button
                        tabindex="0"
                        role="link"
                        ${listen('click', (event) => {
                            const anchorTag = (
                                event.currentTarget as Partial<Element> | null
                            )?.querySelector?.('a');

                            if (!anchorTag) {
                                throw new Error(
                                    'Failed to find link anchor tag for middle ellipsis element link.',
                                );
                            }
                            anchorTag.click();
                        })}
                        class="link-wrapper"
                    >
                        <!--
                            This <a> element has no tabindex because the button above should be
                            focused in stead. This is a workaround for the fact that Safari does not
                            support tab-focus for <a> elements.
                        -->
                        <a
                            tabindex="-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-wrapper"
                            href=${ifDefined(inputs.externalLink)}
                            title=${hoverText}
                            style=${css`
                                pointer-events: none;
                            `}
                        >
                            ${textTemplate} ${iconTemplate}
                        </a>
                    </button>
                `;
            } else if (shouldCopy) {
                return html`
                    <button
                        class="text-wrapper copyable"
                        ${listen('click', async () => {
                            await copyToClipboard(fullText);
                            dispatch(new events.copy());
                            if (state.showCopiedTextTimeoutId != undefined) {
                                window.clearTimeout(state.showCopiedTextTimeoutId);
                            }

                            updateState({
                                showCopiedTextTimeoutId: window.setTimeout(() => {
                                    updateState({
                                        showCopiedTextTimeoutId: undefined,
                                    });
                                }, 5_000),
                            });
                        })}
                    >
                        ${textTemplate} ${iconTemplate}
                    </button>
                `;
            } else {
                return html`
                    ${textTemplate}
                `;
            }
        } else {
            return html``;
        }
    },
});
