import {assign, css, defineElementEvent, html, listen} from 'element-vir';
import {copyToClipboard} from '../../clipboard';
import {Copy24Icon, ExternalLink24Icon, ToniqSvg} from '../../icons';
import {interactionDuration} from '../../styles/animation';
import {toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {toniqFontStyles} from '../../styles/fonts';
import {removeNativeFormStyles} from '../../styles/native-styles';
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
export const ToniqMiddleEllipsis = defineToniqElement({
    tagName: 'toniq-middle-ellipsis',
    props: {
        text: '',
        /**
         * Determines how many letter render before the truncation ellipsis. The same number of
         * letters are also rendered after the ellipsis.
         *
         * This is customizable, but shouldn't need to be changed very often.
         */
        letterCount: 4,
        /**
         * Support optional specific behavior where an icon shows up that, when clicked, copies the
         * whole text to the user's clipboard.
         */
        copyOnClick: false,
        externalLink: '',
    },
    events: {
        copied: defineElementEvent<void>(),
    },
    styles: css`
        :host {
            /* 5 frames at 60 fps */
            transition: ${interactionDuration};
            ${toniqFontStyles.paragraphFont};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.clickable:hover) {
            color: ${toniqColors.pageInteraction.foregroundColor};
        }

        ${ToniqIcon} {
            margin-left: 4px;
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
            ${removeNativeFormStyles};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${createFocusStyles('button:focus', 0)}
        ${createFocusStyles('a:focus', 0)}
    `,
    renderCallback: ({props, setProps, host, dispatch, events}) => {
        // make sure that the letter count is a whole number
        if (!isWholeNumber(props.letterCount)) {
            setProps({letterCount: Math.floor(props.letterCount)});
        }
        // make sure that at least one letter is allowed. Funny things happen when this is less than one!
        if (props.letterCount < 1) {
            setProps({letterCount: 1});
        }

        const isLink: boolean = !!props.externalLink;
        const shouldCopy: boolean = props.copyOnClick;

        if (isLink || shouldCopy) {
            host.classList.add('clickable');
        } else {
            host.classList.remove('clickable');
        }

        const textTooLong = props.text.length > props.letterCount * 2 + 2;
        const renderText = textTooLong
            ? truncateInMiddle(props.text, props.letterCount)
            : props.text;
        const hoverText = textTooLong ? props.text : '';
        const icon: ToniqSvg | undefined = isLink
            ? ExternalLink24Icon
            : shouldCopy
            ? Copy24Icon
            : undefined;

        const iconTemplate = icon
            ? html`
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, icon)}
                ></${ToniqIcon}>
            `
            : '';

        if (renderText) {
            if (isLink) {
                return html`
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-wrapper"
                        href=${props.externalLink}
                        title=${hoverText}
                    >
                        <span>${renderText}</span>
                        ${iconTemplate}
                    </a>
                `;
            } else if (shouldCopy) {
                return html`
                    <button
                        class="text-wrapper copyable"
                        ${listen('click', async () => {
                            await copyToClipboard(props.text);
                            dispatch(new events.copied());
                        })}
                    >
                        <span title=${hoverText}>${renderText}</span>
                        ${iconTemplate}
                    </button>
                `;
            } else {
                return html`
                    <span title=${hoverText}>${renderText}</span>
                `;
            }
        } else {
            return html``;
        }
    },
});
