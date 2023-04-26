import {awaitedForEach, isTruthy} from '@augment-vir/common';
import {assert, fixture, waitUntil} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from './assertion-helpers';
import {createFixtureTest, withFixtureCleanup} from './fixture-test';

export async function hitTab(): Promise<void> {
    await sendKeys({
        press: 'Tab',
    });
}

export async function hitShiftTab(): Promise<void> {
    await sendKeys({
        down: 'Shift',
    });
    await sendKeys({
        press: 'Tab',
    });
    await sendKeys({
        up: 'Shift',
    });
}

async function getTagName(singleInstanceTemplate: TemplateResult): Promise<string> {
    return await withFixtureCleanup(async () => {
        const rendered = await fixture(singleInstanceTemplate);
        assertInstanceOf(rendered, HTMLElement);
        const tagName = rendered.tagName;
        return tagName;
    });
}

export function logActiveElement() {
    const activeElement = document.activeElement;
    const activeElementName = [
        activeElement?.tagName,
        Array.from(activeElement?.classList || [])
            .map((entry) => `.${entry}`)
            .join(''),
    ]
        .filter(isTruthy)
        .join('');

    console.info({
        failedActiveElement: activeElementName,
        failedBodyHtml: document.body.innerHTML,
    });
}

export async function assertFocused(
    element: Element,
    shouldBeActive: boolean,
    message?: string,
): Promise<void> {
    const defaultMessage = shouldBeActive
        ? `${element.tagName} should have been focused but wasn't`
        : `${element.tagName} should NOT have been focused but was`;

    await waitUntil(() => {
        try {
            /**
             * Don't use document.activeElement here to test which element is focused because
             * web-test-runner seizes up when you do that for some reason.
             */
            assert.strictEqual(
                element.matches(':focus'),
                shouldBeActive,
                message || defaultMessage,
            );
        } catch (error) {
            logActiveElement();
            throw error;
        }
        return true;
    });
}

export function addSiblingSoFocusTestsWork(context: Element): HTMLElement {
    const siblingDiv = document.createElement('div');
    siblingDiv.classList.add('focus-sibling');
    siblingDiv.setAttribute('tabindex', '0');
    // append a div so that the test has something to tab to
    context.parentElement!.appendChild(siblingDiv);

    return siblingDiv;
}

export function runFocusTests(
    singleInstanceTemplate: TemplateResult,
    isFocusable: boolean,
    description = 'focus tests',
): void {
    describe(description, () => {
        it(
            isFocusable ? 'should be focusable' : 'should not be focusable',
            createFixtureTest(async () => {
                const rendered = await fixture(singleInstanceTemplate);
                const sibling = addSiblingSoFocusTestsWork(rendered);
                sibling.focus();
                assertInstanceOf(rendered, HTMLElement);
                await hitShiftTab();

                if (isFocusable) {
                    await assertFocused(rendered, true);
                    await hitTab();
                    await assertFocused(rendered, false);
                } else {
                    await assertFocused(rendered, false);
                }
            }),
        );

        it(
            isFocusable ? 'should be navigable with tab' : 'should not be navigable with tab',
            createFixtureTest(async () => {
                const instanceCount = 5;
                const tagName = await getTagName(singleInstanceTemplate);

                const rendered = await fixture(
                    html`
                        <div>
                            ${Array(instanceCount)
                                .fill(0)
                                .map(() => singleInstanceTemplate)}
                        </div>
                    `,
                );
                assertInstanceOf(rendered, HTMLDivElement);
                const allInstances: Element[] = Array.from(document.querySelectorAll(tagName));
                assert.strictEqual(
                    allInstances.length,
                    instanceCount,
                    `Got the wrong number of ${tagName} instances.`,
                );

                await awaitedForEach(allInstances, async (currentInstance, index) => {
                    await hitTab();

                    if (isFocusable) {
                        await assertFocused(currentInstance, true);
                        if (index > 0) {
                            const lastInstance = allInstances[index - 1];
                            assertInstanceOf(lastInstance, HTMLElement);
                            await assertFocused(lastInstance, false);
                        }
                    } else {
                        await assertFocused(currentInstance, false);
                    }
                });
            }),
        );
    });
}
