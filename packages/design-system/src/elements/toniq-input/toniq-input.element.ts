import {assign, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {TemplateResult} from 'lit';
import {ToniqSvg} from '../../icons';
import {toniqColors, toniqFontStyles} from '../../styles';
import {createFocusStyles} from '../../styles/focus';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {defineToniqElement} from '../define-toniq-element';
import {buttonBorderRadius} from '../toniq-button/toniq-button.element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

function doesMatch({input, matcher}: {input: string; matcher: string | RegExp}): boolean {
    if (!input || !matcher) {
        return true;
    }
    if (input.length > 1) {
        return !!input.split('').every((singleInput) => doesMatch({input: singleInput, matcher}));
    }

    if (matcher instanceof RegExp) {
        return !!input.match(matcher);
    } else {
        return matcher.includes(input);
    }
}

type IsAllowedInputs = {
    value: string;
    allowed: string | RegExp | undefined;
    blocked: string | RegExp | undefined;
};

function isAllowed({value, allowed, blocked}: IsAllowedInputs) {
    const isAllowedCharacter = allowed
        ? doesMatch({
              input: value,
              matcher: allowed,
          })
        : true;
    const isBlockedCharacter = blocked
        ? doesMatch({
              input: value,
              matcher: blocked,
          })
        : false;

    return isAllowedCharacter && !isBlockedCharacter;
}

function filterToAllowedCharactersOnly(inputs: IsAllowedInputs): {
    filtered: string;
    blocked: string;
} {
    if (!inputs.value) {
        return {filtered: inputs.value, blocked: ''};
    }
    const {filtered, blocked} = inputs.value.split('').reduce(
        (accum, letter) => {
            const allowed = isAllowed({...inputs, value: letter});

            if (allowed) {
                accum.filtered.push(letter);
            } else {
                accum.blocked.push(letter);
            }
            return accum;
        },
        {
            filtered: [] as string[],
            blocked: [] as string[],
        },
    );

    return {
        filtered: filtered.join(''),
        blocked: blocked.join(''),
    };
}

export const ToniqInput = defineToniqElement<{
    icon?: undefined | ToniqSvg;
    value: string;
    /** Shown when no other text is present. Input restrictions do not apply to this property. */
    placeholder?: string;
    /** Set to true to trigger disabled styles and to block all user input. */
    disabled?: boolean;
    /**
     * Only letters in the given string or matches to the given RegExp will be allowed.
     * blockedInputs takes precedence over this input.
     *
     * For example: if allowedInputs is set to "abcd" and blockedInputs is set to "d", only "a",
     * "b", or "c" letters will be allowed.
     */
    allowedInputs?: string | RegExp;
    /** Any letters in the given string or matches to the given RegExp will be blocked. */
    blockedInputs?: string | RegExp;
    /** Disable all browser helps like spellchecking, autocomplete, etc. */
    disableBrowserHelps?: boolean;
    /** A suffix that, if provided, is shown following the user input field. */
    suffix?: string;
}>()({
    tagName: 'toniq-input',
    hostClasses: {
        'toniq-input-outline': false,
        'toniq-input-has-a-value': ({inputs}) => !!inputs.value,
    },
    events: {
        /**
         * Fires whenever a user input created a new value. Does not fire if all input letters are
         * filtered out due to input restrictions.
         */
        valueChange: defineElementEvent<string>(),
        /**
         * Fires when inputs are blocked. Useful for showing warnings or error messages to inform
         * the user why their input did not propagate if it was blocked. This does not fire for text
         * that was blocked out of programmatic "value" property assignments.
         */
        inputBlocked: defineElementEvent<string>(),
    },
    styles: ({hostClasses}) => {
        return css`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
            }

            .focus-border {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${buttonBorderRadius};
                z-index: 0;
                pointer-events: none;
            }

            ${hostClasses['toniq-input-outline'].selector} label {
                background-color: ${toniqColors.pagePrimary.backgroundColor};
                border: 1px solid ${toniqColors.pageTertiary.foregroundColor};
            }

            ${hostClasses['toniq-input-outline'].selector} ${ToniqIcon} {
                color: ${toniqColors.pageSecondary.foregroundColor};
            }

            :host(
                    .${hostClasses['toniq-input-has-a-value'].name}.${hostClasses[
                            'toniq-input-outline'
                        ].name}
                )
                ${ToniqIcon} {
                color: ${toniqColors.pagePrimary.foregroundColor};
            }

            ${hostClasses['toniq-input-outline'].selector} input::placeholder {
                color: ${toniqColors.pageSecondary.foregroundColor};
            }

            label {
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 12px 16px;
                border-radius: ${buttonBorderRadius};
                background-color: ${toniqColors.accentTertiary.backgroundColor};
                font: ${toniqFontStyles.paragraphFont};
                gap: 4px;
            }

            ${createFocusStyles({
                mainSelector: 'input:focus:focus-visible:not(:active) ~ .focus-border',
                elementBorderSize: 0,
            })}

            ${ToniqIcon} {
                margin-right: 10px;
            }

            input {
                ${removeNativeFormStyles};
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${toniqColors.accentTertiary.foregroundColor};
            }

            .suffix {
                ${toniqFontStyles.boldFont};
            }
        `;
    },
    renderCallback({inputs, dispatch, events}) {
        const {filtered: filteredValue} = filterToAllowedCharactersOnly({
            value: inputs.value ?? '',
            allowed: inputs.allowedInputs,
            blocked: inputs.blockedInputs,
        });

        const iconTemplate: TemplateResult | string = inputs.icon
            ? html`
                  <${ToniqIcon} ${assign(ToniqIcon, {icon: inputs.icon})}></${ToniqIcon}>
              `
            : '';

        return html`
            <label>
                ${iconTemplate}
                <input
                    autocomplete=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocorrect=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocapitalize=${inputs.disableBrowserHelps ? 'off' : ''}
                    spellcheck=${inputs.disableBrowserHelps ? 'false' : ''}
                    ?disabled=${inputs.disabled}
                    .value=${filteredValue}
                    ${listen('input', (event) => {
                        /**
                         * When attached to an input element (like here) this event type should
                         * always be InputEvent.
                         */
                        if (!(event instanceof InputEvent)) {
                            throw new Error(
                                `Input event type mismatch: "${event.constructor.name}"`,
                            );
                        }
                        const inputElement = event.target;
                        if (!(inputElement instanceof HTMLInputElement)) {
                            throw new Error(
                                `Failed to find input element target from input event.`,
                            );
                        }
                        /**
                         * This is usually a single character, but can be a bunch of characters in
                         * some circumstances. For example, when a bunch of characters are pasted,
                         * this will be the entire pasted contents.
                         */
                        const changedText = event.data;
                        const beforeChangeText = filteredValue;

                        // this will be overwritten below if blocked characters are encountered
                        let finalText = inputElement.value ?? '';

                        /**
                         * When changedText is falsy, that means an operation other than inserting
                         * characters happened. Such as: deleting, cutting the text, etc.
                         */
                        if (changedText) {
                            if (changedText.length === 1) {
                                if (
                                    !isAllowed({
                                        value: changedText,
                                        allowed: inputs.allowedInputs,
                                        blocked: inputs.blockedInputs,
                                    })
                                ) {
                                    // prevent the change from happening
                                    finalText = beforeChangeText;
                                    dispatch(new events.inputBlocked(changedText));
                                }
                            }
                            // filters out blocked pasted letters
                            else {
                                const {filtered, blocked} = filterToAllowedCharactersOnly({
                                    value: changedText,
                                    allowed: inputs.allowedInputs,
                                    blocked: inputs.blockedInputs,
                                });
                                finalText = filtered;
                                dispatch(new events.inputBlocked(blocked));
                            }
                        }

                        if (inputElement.value !== finalText) {
                            // this prevents blocked inputs by simply overwriting them
                            inputElement.value = finalText;
                        }
                        if (beforeChangeText !== finalText) {
                            dispatch(new events.valueChange(finalText));
                        }
                    })}
                    placeholder=${inputs.placeholder}
                />
                ${renderIf(
                    !!inputs.suffix,
                    html`
                        <div class="suffix">${inputs.suffix}</div>
                    `,
                )}
                <div class="focus-border"></div>
            </label>
        `;
    },
});
