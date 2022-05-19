import {randomString} from 'augment-vir';
import {css, defineElementEvent, html} from 'element-vir';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
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
            font-family: var(--toniq-font, 'Rubik');
        }

        span {
            border: 0;
            cursor: pointer;
            font-family: inherit;
            font-weight: 700;
            font-style: normal;
            line-height: 24px;
            font-size: 16px;
            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;

            ${applyBackgroundAndForeground(toniqColors.accentSecondary)};
            padding: 4px 12px;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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