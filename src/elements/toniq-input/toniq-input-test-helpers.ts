import {assert, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {assign, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createStateTester} from '../../element-testing/state-tester';
import {assertFocused, hitTab} from '../../element-testing/test-focus';
import {ToniqInput} from './toniq-input.element';

export async function setupToniqInputTest(initialTemplate: TemplateResult) {
    const rendered = await fixture(initialTemplate);
    const toniqInputInstances = queryThroughShadow(ToniqInput.tagName, rendered, true);
    assert.strictEqual(
        toniqInputInstances.length,
        1,
        `Found wrong instance count of ${ToniqInput.tagName}`,
    );

    const toniqInputInstance = toniqInputInstances[0];
    assertInstanceOf(toniqInputInstance, ToniqInput);

    const innerInput = queryThroughShadow('input', toniqInputInstance);
    assertInstanceOf(innerInput, HTMLInputElement);

    return {
        rendered,
        toniqInputInstance,
        innerInput,
    };
}

export async function runBlockedTextTest(
    blockedInputsInput: string | RegExp,
    textToType: string,
    testCallback: (inputValue: string) => Promise<void> | void,
) {
    const readChanges: string[] = [];

    const inputStateWrapper = createStateTester({value: ''}, ({state, updateState}) => {
        return html`
            <${ToniqInput}
                ${assign(ToniqInput, {
                    value: state.value,
                    blockedInputs: blockedInputsInput,
                })}
                ${listen(ToniqInput.events.valueChange, (event) => {
                    const newValue = event.detail;
                    readChanges.push(newValue);
                    updateState({value: newValue});
                })}
            ></${ToniqInput}>
        `;
    });
    const {toniqInputInstance} = await setupToniqInputTest(
        html`
            <${inputStateWrapper}></${inputStateWrapper}>
        `,
    );

    const innerInput = await focusAndTypeIntoToniqInput(toniqInputInstance, textToType, false);

    readChanges.forEach((changedLetter) => {
        if (blockedInputsInput instanceof RegExp) {
            assert.notMatch(changedLetter, blockedInputsInput);
        } else {
            blockedInputsInput.split('').forEach((blockedLetter) => {
                assert.notStrictEqual(changedLetter, blockedLetter);
            });
        }
    });

    await testCallback(innerInput.value);
}

/** This assumes that the given ToniqInput is the next element in the focus order. */
export async function typeIntoToniqInput(
    toniqInput: (typeof ToniqInput)['instanceType'],
    textToType: string,
    checkAfterwards?: boolean,
): Promise<HTMLInputElement> {
    const innerInput = queryThroughShadow('input', toniqInput);
    assertInstanceOf(innerInput, HTMLInputElement);

    assertFocused(innerInput, true, 'input element needs be focused before typing into it');

    await sendKeys({
        type: textToType,
    });

    if (checkAfterwards) {
        assert.strictEqual(
            innerInput.value,
            textToType,
            "Input element's text does not match the typed text.",
        );
    }

    return innerInput;
}

/** This assumes that the given ToniqInput is the next element in the focus order. */
export async function focusAndTypeIntoToniqInput(
    toniqInput: (typeof ToniqInput)['instanceType'],
    textToType: string,
    checkAfterwards?: boolean,
): Promise<HTMLInputElement> {
    const innerInput = queryThroughShadow('input', toniqInput);
    assertInstanceOf(innerInput, HTMLInputElement);

    assertFocused(innerInput, false, 'inner input element should not be focused yet');

    await hitTab();

    assertFocused(innerInput, true, 'inner input element should now be focused');

    return await typeIntoToniqInput(toniqInput, textToType, checkAfterwards);
}
