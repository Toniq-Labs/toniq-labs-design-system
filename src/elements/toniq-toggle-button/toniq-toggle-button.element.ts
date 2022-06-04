import {randomString} from 'augment-vir';
import {css, defineElementEvent, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqToggleButton = defineToniqElement({
    initCallback: ({setProps}) => {
        setProps({inputId: randomString()});
    },
    tagName: 'toniq-toggle-button',
    props: {
        text: '',
        active: false,
        inputId: '',
    },
    events: {
        activeChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
            ${noUserSelect};
            display: inline-block;
        }

        label {
            display: inline-block;
        }

        span {
            border: 0;
            display: inline-flex;
            cursor: pointer;
            font: inherit;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            padding: 4px 12px;
        }

        input {
            display: none;
        }

        .active span {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }
    `,
    renderCallback: ({props, dispatch, events, setProps}) => {
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
                <span>${props.text}</span>
            </label>
        `;
    },
});
