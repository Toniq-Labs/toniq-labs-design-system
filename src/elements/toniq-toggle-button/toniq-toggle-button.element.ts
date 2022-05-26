import {randomString} from 'augment-vir';
import {css, defineElementEvent, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {toniqFontStyles} from '../../styles/fonts';
import {noUserSelect} from '../../styles/user-select';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqToggleButton = defineToniqElement({
    tagName: 'toniq-toggle-button',
    initCallback: ({setProps}) => {
        setProps({inputId: randomString()});
    },
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
        }

        span {
            border: 0;
            cursor: pointer;
            font: inherit;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            padding: 4px 12px;
        }

        input[type='checkbox'] {
            display: none;
        }

        input[type='checkbox']:checked + span,
        input[checked='true'] + span {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)};
        }
    `,
    renderCallback: ({props, dispatch, events}) => {
        return html`
            <label for=${props.inputId}>
                <input
                    id=${props.inputId}
                    type="checkbox"
                    ?checked=${props.active}
                    @change=${(event: Event) => {
                        dispatch(
                            new events.activeChange((event.target as HTMLInputElement).checked),
                        );
                    }}
                />
                <span>${props.text}</span>
            </label>
        `;
    },
});
