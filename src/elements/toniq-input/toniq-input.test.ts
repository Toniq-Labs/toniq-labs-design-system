import {assert, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {addRegExpFlags} from 'augment-vir';
import {assign, FunctionalElementInstance, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {
    assertFocused,
    createFocusTests,
    hitShiftTab,
    hitTab,
} from '../../element-testing/test-focus';
import {ToniqInput} from './toniq-input.element';

describe(ToniqInput.tagName, () => {
    createElementRegistrationTest(ToniqInput);

    async function setupToniqInputTest(initialTemplate: TemplateResult) {
        const rendered = await fixture(initialTemplate);
        const toniqInputInstances = Array.from(document.querySelectorAll(ToniqInput.tagName));
        assert.strictEqual(
            toniqInputInstances.length,
            1,
            `Found more than one instance of ${ToniqInput.tagName}`,
        );

        const toniqInputInstance = toniqInputInstances[0];
        assertInstanceOf(toniqInputInstance, ToniqInput);

        const innerInput = queryThroughShadow('input', rendered);
        assertInstanceOf(innerInput, HTMLInputElement);

        return {
            rendered,
            toniqInputInstance,
            innerInput,
        };
    }

    /** This assumes that the given ToniqInput is the next element in the focus order. */
    async function typeIntoToniqInput(
        toniqInput: FunctionalElementInstance<typeof ToniqInput>,
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
    async function focusAndTypeIntoToniqInput(
        toniqInput: FunctionalElementInstance<typeof ToniqInput>,
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

    it(
        'should set value programmatically',
        createFixtureTest(async () => {
            const assignedValue = 'five';
            const {toniqInputInstance, innerInput} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput.props.value, assignedValue)}
                    ></${ToniqInput}>
                `,
            );

            assertInstanceOf(innerInput, HTMLInputElement);

            assert.equal(innerInput.value, assignedValue);
            assert.equal(toniqInputInstance.instanceProps.value, assignedValue);
        }),
    );

    it(
        'should respond to user input',
        createFixtureTest(async () => {
            const assignedValue = 'five';
            const readChanges: string[] = [];
            const {toniqInputInstance} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput.props.value, assignedValue)}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            readChanges.push(event.detail);
                        })}
                    ></${ToniqInput}>
                `,
            );

            const textToType = 'a b c d e f g';
            await focusAndTypeIntoToniqInput(toniqInputInstance, textToType, true);

            assert.strictEqual(readChanges.length, textToType.length);
            assert.strictEqual(readChanges[readChanges.length - 1], textToType);
            assert.strictEqual(toniqInputInstance.instanceProps.value, textToType);
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
                        ${assign(ToniqInput.props.value, originalValue)}
                        ${assign(ToniqInput.props.disabled, true)}
                    ></${ToniqInput}>
                `,
            );

            assertFocused(innerInput, false);
            await hitTab();
            assertFocused(innerInput, false);
            // possibly flaky: this might require a wait afterwards to give the document time to update
            toniqInputInstance.instanceProps.disabled = false;
            await hitShiftTab();
            assertFocused(innerInput, true);
        }),
    );

    describe('with blocked text', () => {
        async function runBlockedTextTest(
            blockedInputsInput: string | RegExp,
            textToType: string,
            testCallback: (inputValue: string) => Promise<void> | void,
        ) {
            const readChanges: string[] = [];
            const {toniqInputInstance} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput.props.blockedInputs, blockedInputsInput)}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            readChanges.push(event.detail);
                        })}
                    ></${ToniqInput}>
                `,
            );

            const innerInput = await focusAndTypeIntoToniqInput(
                toniqInputInstance,
                textToType,
                false,
            );

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

    createFocusTests(html`<${ToniqInput}></${ToniqInput}>`, true);
});
