import {assign, css, html, listen} from 'element-vir';
import {copyToClipboard} from '../../clipboard';
import {Copy24Icon, ExternalLink24Icon, ToniqSvg} from '../../icons';
import {interactionDuration} from '../../shared-styles/animation';
import {interactionHoverColor} from '../../shared-styles/colors';
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
    styles: css`
        :host {
            /* 5 frames at 60 fps */
            transition: ${interactionDuration};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.clickable:hover) {
            color: ${interactionHoverColor};
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
        }
        a:visited {
            color: inherit;
        }
    `,
    renderCallback: ({props, setProps, host}) => {
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
                    <span
                        class="text-wrapper copyable"
                        ${listen('click', async () => {
                            await copyToClipboard(props.text);
                        })}
                    >
                        <span title=${hoverText}>${renderText}</span>
                        ${iconTemplate}
                    </span>
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
