import {assert, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
import {awaitedForEach} from 'augment-vir';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from './assertion-helpers';
import {createFixtureTest, withFixtureCleanup} from './fixture-test';

export async function hitTab(): Promise<void> {
    await sendKeys({
        press: 'Tab',
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

export function assertFocused(element: Element, shouldBeActive: boolean): void {
    // accessing document.activeElement often causes web-test-runner to seize up for some reason
    assert.strictEqual(element.matches(':focus'), shouldBeActive);
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
                    assertFocused(rendered, true);
                    await hitTab();
                    assertFocused(rendered, false);
                } else {
                    assertFocused(rendered, false);
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
                assert.strictEqual(
                    allInstances.length,
                    instanceCount,
                    `Got the wrong number of ${tagName} instances.`,
                );

                await awaitedForEach(allInstances, async (currentInstance, index) => {
                    await hitTab();

                    if (isFocusable) {
                        assertFocused(currentInstance, true);
                        if (index > 0) {
                            const lastInstance = allInstances[index - 1];
                            assertInstanceOf(lastInstance, HTMLElement);
                            assertFocused(lastInstance, false);
                        }
                    } else {
                        assertFocused(currentInstance, false);
                    }
                });
            }),
        );
    });
}
