import {randomString} from 'augment-vir';
import {assign, css, defineElementEvent, html} from 'element-vir';
import {ToniqSvg} from '../../icons';
import {interactionDuration} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export const ToniqToggleButton = defineToniqElement({
    tagName: 'toniq-toggle-button',
    initCallback: ({setProps}) => {
        setProps({inputId: randomString()});
    },
    props: {
        text: '',
        active: false,
        icon: undefined as undefined | ToniqSvg,
        inputId: '',
    },
    events: {
        activeChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
            display: inline-flex;
            vertical-align: middle;
        }

        label {
            display: inline-flex;
        }

        .wrapper {
            border: 0;
            display: inline-flex;
            cursor: pointer;
            font: inherit;
            align-items: center;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            transition: ${interactionDuration};
        }

        .text-wrapper {
            margin: 4px 12px;
            margin-left: 0;
        }

        .icon-wrapper {
            margin-left: 12px;
        }

        input {
            display: none;
        }

        .active .wrapper {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }

        :host(.toniq-toggle-button-text-only) .wrapper {
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) .active .wrapper {
            ${applyBackgroundAndForeground(toniqColors.pageInteraction)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) .text-wrapper {
            margin-right: 8px;
        }
        :host(.toniq-toggle-button-text-only) .icon-wrapper {
            margin-left: 8px;
        }

        ${ToniqIcon} {
            margin-right: 8px;
        }
    `,
    renderCallback: ({props, dispatch, events, setProps}) => {
        const iconTemplate = props.icon
            ? html`
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, props.icon)}
                ></${ToniqIcon}>
            `
            : '';

        return html`
            <label class=${props.active ? 'active' : ''} for=${props.inputId}>
                <input
                    id=${props.inputId}
                    type="checkbox"
                    ?checked=${props.active}
                    @change=${(event: Event) => {
                        const isActive = (event.target as HTMLInputElement).checked;
                        setProps({active: isActive});
                        dispatch(new events.activeChange(isActive));
                    }}
                />
                <span class="wrapper">
                    <span class="icon-wrapper">${iconTemplate}</span>
                    <span class="text-wrapper">${props.text}</span>
                </span>
            </label>
        `;
    },
});
