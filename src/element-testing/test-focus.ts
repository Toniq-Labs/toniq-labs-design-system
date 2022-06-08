import {assert, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {awaitedForEach} from 'augment-vir';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from './assertion-helpers';
import {createFixtureTest, withFixtureCleanup} from './fixture-test';

async function hitTab() {
    await sendKeys({
        press: 'Tab',
    });
}

function getTagName(singleInstanceTemplate: TemplateResult): Promise<string> {
    return withFixtureCleanup(async () => {
        const rendered = await fixture(singleInstanceTemplate);
        assertInstanceOf(rendered, HTMLElement);
        const tagName = rendered.tagName;
        return tagName;
    });
}

function checkActiveElement(element: Element, shouldBeActive: boolean): void {
    if (shouldBeActive) {
        // using assert here does something weird where it never resolves:
        // assert.strictEqual(document.activeElement, element);
        if (document.activeElement !== element) {
            throw new Error(`Expected ${element.tagName} to be the focused element but it wasn't.`);
        }
    } else {
        if (document.activeElement === element) {
            throw new Error(`Expected ${element.tagName} NOT to be the focused element but it is.`);
        }
    }
}

export function createFocusTests(
    singleInstanceTemplate: TemplateResult,
    isFocusable: boolean,
    description = 'focus tests',
): void {
    describe(description, () => {
        it(
            singleInstanceTemplate ? 'should be focusable' : 'should not be focusable',
            createFixtureTest(async () => {
                const rendered = await fixture(singleInstanceTemplate);
                assertInstanceOf(rendered, HTMLElement);
                await hitTab();

                if (isFocusable) {
                    checkActiveElement(rendered, true);
                    await hitTab();
                    checkActiveElement(rendered, false);
                } else {
                    checkActiveElement(rendered, false);
                }
            }),
        );

        it(
            singleInstanceTemplate
                ? 'should be navigable with tab'
                : 'should not be navigable with tab',
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
                // assert.strictEqual(
                //     allInstances.length,
                //     instanceCount,
                //     `Got the wrong number of ${tagName} instances.`,
                // );

                await awaitedForEach(allInstances, async (currentInstance, index) => {
                    await hitTab();

                    if (isFocusable) {
                        checkActiveElement(currentInstance, true);
                        if (index > 0) {
                            const lastInstance = allInstances[index - 1];
                            assertInstanceOf(lastInstance, HTMLElement);
                            assert.notStrictEqual(document.activeElement, lastInstance);
                        }
                    } else {
                        checkActiveElement(currentInstance, false);
                    }
                });
            }),
        );
    });
}
