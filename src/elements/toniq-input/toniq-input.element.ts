import {assign, css, defineElementEvent, html, listen, onDomCreated} from 'element-vir';
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
    allowed: string | RegExp;
    blocked: string | RegExp;
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

export const ToniqInput = defineToniqElement({
    tagName: 'toniq-input',
    props: {
        icon: undefined as ToniqSvg | undefined,
        /** Use to programmatically fill out the input's value field. */
        value: '',
        /** Shown when no other text is present. Input restrictions do not apply to this property. */
        placeholder: '',
        /** Set to true to trigger disabled styles and to block all user input. */
        disabled: false,
        /**
         * Only letters in the given string or matches to the given RegExp will be allowed.
         * blockedInputs takes precedence over this input.
         *
         * For example: if allowedInputs is set to "abcd" and blockedInputs is set to "d", only "a",
         * "b", or "c" letters will be allowed.
         */
        allowedInputs: '' as string | RegExp,
        /** Any letters in the given string or matches to the given RegExp will be blocked. */
        blockedInputs: '' as string | RegExp,
        /**
         * This is used to grab the "value" of user inputs. Warning: externally overriding this will
         * cause weird things to happen!
         */
        innerInputElement: undefined as undefined | HTMLInputElement,
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
    styles: css`
        :host {
            position: relative;
            display: inline-flex;
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

        label {
            flex-grow: 1;
            cursor: pointer;
            display: inline-flex;
            box-sizing: border-box;
            position: relative;
            padding: 12px 16px;
            border-radius: ${buttonBorderRadius};
            background-color: ${toniqColors.accentTertiary.backgroundColor};
            font: ${toniqFontStyles.paragraphFont};
        }

        ${createFocusStyles('input:focus ~ .focus-border', 0)}

        ${ToniqIcon} {
            margin-right: 10px;
        }

        input {
            ${removeNativeFormStyles};
            flex-grow: 1;
        }

        input:focus {
            outline: none;
        }

        input::placeholder {
            color: ${toniqColors.accentTertiary.foregroundColor};
        }
    `,
    renderCallback: ({props, setProps, dispatch, events, host}) => {
        const {filtered: filteredValue} = filterToAllowedCharactersOnly({
            value: props.value,
            allowed: props.allowedInputs,
            blocked: props.blockedInputs,
        });

        if (filteredValue !== props.value) {
            setProps({value: filteredValue});
        }

        const iconTemplate: TemplateResult | string = props.icon
            ? html`
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, props.icon)}
                ></${ToniqIcon}>
            `
            : '';

        return html`
            <label>
                ${iconTemplate}
                <input
                    ?disabled=${props.disabled}
                    ${onDomCreated((element) => {
                        if (element instanceof HTMLInputElement) {
                            setProps({innerInputElement: element});
                        } else {
                            throw new Error(
                                `Created DOM element was not an input element: "${element.tagName}"`,
                            );
                        }
                    })}
                    .value=${props.value}
                    ${listen('input', (event) => {
                        if (!props.innerInputElement) {
                            const innerInputElement = host.shadowRoot?.querySelector('input');
                            if (!(innerInputElement instanceof HTMLInputElement)) {
                                throw new Error(`Failed to get inner input element in listener`);
                            }
                            setProps({innerInputElement});
                            // this is just a type guard
                            if (!props.innerInputElement) {
                                throw new Error(
                                    `Even after assigning input element again, it still isn't found.`,
                                );
                            }
                        }
                        /**
                         * When attached to an input element (like here) this event type should
                         * always be InputEvent.
                         */
                        if (!(event instanceof InputEvent)) {
                            throw new Error(
                                `Input event type mismatch: "${event.constructor.name}"`,
                            );
                        }
                        /**
                         * This is usually a single character, but can be a bunch of characters in
                         * some circumstances. For example, when a bunch of characters are pasted,
                         * this will be the entire pasted contents.
                         */
                        const changedText = event.data;
                        const beforeChangeText = props.value;

                        // this will be overwritten below if blocked characters are encountered
                        let finalText = props.innerInputElement.value ?? '';

                        /**
                         * When changedText is falsy, that means an operation other than inserting
                         * characters happened. Such as: deleting, cutting the text, etc.
                         */
                        if (changedText) {
                            if (changedText.length === 1) {
                                if (
                                    !isAllowed({
                                        value: changedText,
                                        allowed: props.allowedInputs,
                                        blocked: props.blockedInputs,
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
                                    allowed: props.allowedInputs,
                                    blocked: props.blockedInputs,
                                });
                                finalText = filtered;
                                dispatch(new events.inputBlocked(blocked));
                            }
                        }

                        if (props.value !== finalText) {
                            setProps({value: finalText});
                        }
                        if (props.innerInputElement.value !== finalText) {
                            // this prevents blocked inputs by simply overwriting them
                            props.innerInputElement.value = finalText;
                        }
                        if (beforeChangeText !== finalText) {
                            dispatch(new events.valueChange(finalText));
                        }
                    })}
                    placeholder=${props.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `;
    },
});
