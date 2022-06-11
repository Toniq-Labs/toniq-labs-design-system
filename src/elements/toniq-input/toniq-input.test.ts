import {assert, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {assign, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {assertFocused, createFocusTests, hitTab} from '../../element-testing/test-focus';
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
            const {innerInput, toniqInputInstance} = await setupToniqInputTest(
                html`
                    <${ToniqInput}
                        ${assign(ToniqInput.props.value, assignedValue)}
                        ${listen(ToniqInput.events.valueChange, (event) => {
                            readChanges.push(event.detail);
                        })}
                    ></${ToniqInput}>
                `,
            );

            assertFocused(innerInput, false);

            await hitTab();

            assertFocused(innerInput, true);

            const keysToSend = 'a b c d e f g';

            await sendKeys({
                type: keysToSend,
            });

            assert.strictEqual(readChanges.length, keysToSend.length);
            assert.strictEqual(readChanges[readChanges.length - 1], keysToSend);
            assert.strictEqual(innerInput.value, keysToSend);
            assert.strictEqual(toniqInputInstance.instanceProps.value, keysToSend);

            keysToSend.split('').forEach((letter, index) => {
                const lettersSoFar = keysToSend.slice(0, index + 1);
                assert.strictEqual(readChanges[index], lettersSoFar);
            });
        }),
    );

    createFocusTests(html`<${ToniqInput}></${ToniqInput}>`, true);
});
