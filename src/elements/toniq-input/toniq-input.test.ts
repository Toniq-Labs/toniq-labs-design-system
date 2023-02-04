import {addRegExpFlags} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {assign, html, listen} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {createStateTester} from '../../element-testing/state-tester';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {assertFocused, hitShiftTab, hitTab, runFocusTests} from '../../element-testing/test-focus';
import {
    focusAndTypeIntoToniqInput,
    runBlockedTextTest,
    setupToniqInputTest,
} from './toniq-input-test-helpers';
import {ToniqInput} from './toniq-input.element';

describe(ToniqInput.tagName, () => {
    createElementRegistrationTest(ToniqInput);

    it(
        'should set value programmatically',
        createFixtureTest(async () => {
            const assignedValue = 'five';
            const {toniqInputInstance, innerInput} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: assignedValue,
                        })}
                    ></${ToniqInput}>
                `,
            );

            assertInstanceOf(innerInput, HTMLInputElement);

            assert.equal(innerInput.value, assignedValue);
            assert.equal(toniqInputInstance.instanceInputs.value, assignedValue);
        }),
    );

    it(
        'should respond to user input',
        createFixtureTest(async () => {
            const assignedValue = 'five';
            const readChanges: string[] = [];

            const inputStateWrapper = createStateTester(
                {value: assignedValue},
                ({state, updateState}) => {
                    return html`
                        <${ToniqInput}
                            ${assign(ToniqInput, {
                                value: state.value,
                            })}
                            ${listen(ToniqInput.events.valueChange, (event) => {
                                const newValue = event.detail;
                                readChanges.push(newValue);
                                updateState({value: newValue});
                            })}
                        ></${ToniqInput}>`;
                },
            );

            const {toniqInputInstance} = await setupToniqInputTest(
                html`<${inputStateWrapper}></${inputStateWrapper}>`,
            );

            const textToType = 'a b c d e f g';
            await focusAndTypeIntoToniqInput(toniqInputInstance, textToType, true);

            assert.strictEqual(readChanges.length, textToType.length);
            assert.strictEqual(
                readChanges[readChanges.length - 1],
                textToType,
                'last change did not include the full input',
            );
            assert.strictEqual(
                toniqInputInstance.instanceInputs.value,
                textToType,
                'instance inputs did not get updated',
            );
            textToType.split('').forEach((letter, index) => {
                const lettersSoFar = textToType.slice(0, index + 1);
                assert.strictEqual(readChanges[index], lettersSoFar);
            });
        }),
    );

    it(
        'should not be focusable when disabled',
        createFixtureTest(async () => {
            const originalValue = 'should not change';
            const {innerInput, toniqInputInstance} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput, {
                            value: originalValue,
                            disabled: true,
                        })}
                    ></${ToniqInput}>
                `,
            );

            assertFocused(innerInput, false);
            await hitTab();
            assertFocused(innerInput, false);
            // possibly flaky: this might require a wait afterwards to give the document time to update
            toniqInputInstance.instanceInputs.disabled = false;
            await hitShiftTab();
            assertFocused(innerInput, true);
        }),
    );

    describe('with blocked text', () => {
        it(
            'should not allow blocked characters (by string) to be typed',
            createFixtureTest(async () => {
                const blockedLetters = 'why';
                const textToType = `stuff${blockedLetters} more stuff${blockedLetters[0]}`;

                await runBlockedTextTest(blockedLetters, textToType, (inputValue) => {
                    assert.notStrictEqual(inputValue, textToType);
                    assert.strictEqual(
                        inputValue,
                        textToType
                            .split('')
                            .filter((letter) => !blockedLetters.includes(letter))
                            .join(''),
                    );
                });
            }),
        );

        it(
            'should not allow blocked characters (by RegExp) to be typed',
            createFixtureTest(async () => {
                const textToType = `stuff abcd why this now`;
                const blockedRegExp = /a|b|c/;

                await runBlockedTextTest(blockedRegExp, textToType, (inputValue) => {
                    assert.notStrictEqual(inputValue, textToType);
                    assert.strictEqual(
                        inputValue,
                        textToType.replaceAll(addRegExpFlags(blockedRegExp, 'g'), ''),
                    );
                });
            }),
        );
    });

    runFocusTests(html`<${ToniqInput}></${ToniqInput}>`, true);
});
