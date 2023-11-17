import {addRegExpFlags, wait} from '@augment-vir/common';
import {assert, waitUntil} from '@open-wc/testing';
import {html, listen} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {createStateTester} from '../../element-testing/state-tester';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {
    assertFocused,
    hitShiftTab,
    hitTab,
    logActiveElement,
    runFocusTests,
} from '../../element-testing/test-focus';
import {
    runBlockedTextTest,
    setupToniqInputTest,
    typeIntoToniqInput,
} from './toniq-input-test-helpers';
import {ToniqInput} from './toniq-input.element';

describe(ToniqInput.tagName, () => {
    createElementRegistrationTest(ToniqInput);

    it(
        'should set value programmatically',
        createFixtureTest(async () => {
            const assignedValue = 'five';
            const {toniqInputInstance, innerInput} = await setupToniqInputTest(html`
                <${ToniqInput.assign({
                    value: assignedValue,
                })}></${ToniqInput}>
            `);

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
                        <${ToniqInput.assign({
                            value: state.value,
                        })}
                            ${listen(ToniqInput.events.valueChange, (event) => {
                                const newValue = event.detail;
                                readChanges.push(newValue);
                                updateState({value: newValue});
                            })}
                        ></${ToniqInput}>
                    `;
                },
            );

            const {toniqInputInstance, innerInput} = await setupToniqInputTest(html`
                <${inputStateWrapper}></${inputStateWrapper}>
            `);

            const textToType = 'a b c d e f g';
            await typeIntoToniqInput(toniqInputInstance, textToType);

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
            assert.strictEqual(
                innerInput.value,
                textToType,
                'inner input value did not get updated to match the full input',
            );
        }),
    );

    it(
        'should not be focusable when disabled',
        createFixtureTest(async () => {
            const originalValue = 'should not change';
            const {innerInput, toniqInputInstance} = await setupToniqInputTest(html`
                <${ToniqInput.assign({
                    value: originalValue,
                    disabled: true,
                })}></${ToniqInput}>
            `);

            logActiveElement();
            await assertFocused(innerInput, false);
            await hitTab();
            logActiveElement();
            await assertFocused(innerInput, false);
            // possibly flaky: this might require a wait afterwards to give the document time to update
            toniqInputInstance.assignInputs({disabled: false});
            await waitUntil(() => {
                return toniqInputInstance._lastRenderedProps.inputs.disabled === false;
            });
            await wait(2000);
            logActiveElement();
            await hitShiftTab();

            logActiveElement();
            await assertFocused(innerInput, true);
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

    runFocusTests(
        html`
            <${ToniqInput}></${ToniqInput}>
        `,
        true,
    );
});
