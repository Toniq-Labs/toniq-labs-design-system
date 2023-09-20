import {deleteAllTextInInput, typeStringIntoElement} from '@augment-vir/browser-testing';
import {assert, fixture} from '@open-wc/testing';
import {html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from 'run-time-assertions';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createStateTester} from '../../element-testing/state-tester';
import {addSiblingSoFocusTestsWork} from '../../element-testing/test-focus';
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

    const innerInput = getInnerInput(toniqInputInstance);
    addSiblingSoFocusTestsWork(rendered);

    return {
        rendered,
        toniqInputInstance,
        innerInput,
    };
}

function getInnerInput(toniqInputInstance: (typeof ToniqInput)['instanceType']) {
    const innerInput = queryThroughShadow('input', toniqInputInstance);
    assertInstanceOf(innerInput, HTMLInputElement);

    return innerInput;
}

export async function runBlockedTextTest(
    blockedInputsInput: string | RegExp,
    textToType: string,
    testCallback: (inputValue: string) => Promise<void> | void,
) {
    const readChanges: string[] = [];

    const inputStateWrapper = createStateTester({value: ''}, ({state, updateState}) => {
        return html`
            <${ToniqInput.assign({
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
    const {toniqInputInstance, innerInput} = await setupToniqInputTest(
        html`
            <${inputStateWrapper}></${inputStateWrapper}>
        `,
    );

    await typeStringIntoElement(textToType, toniqInputInstance as any);

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

export async function typeIntoToniqInput(
    toniqInputInstance: (typeof ToniqInput)['instanceType'],
    textToType: string,
    preservePreviousText?: boolean,
) {
    const innerInput = getInnerInput(toniqInputInstance);

    if (!preservePreviousText) {
        await deleteAllTextInInput(innerInput);
    }

    await typeStringIntoElement(textToType, innerInput);

    assert.strictEqual(innerInput.value, textToType);
}
