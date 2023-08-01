import {randomString} from '@augment-vir/browser';
import {
    assertThrows,
    clickElement,
    typedAssertInstanceOf,
    typedAssertNotNullish,
} from '@augment-vir/browser-testing';
import {assertLengthAtLeast, awaitedForEach} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {TypedEvent, html, listen, testIdBy} from 'element-vir';
import {ToniqTopTabs} from './toniq-top-tabs.element';

describe(ToniqTopTabs.tagName, () => {
    async function renderExampleTopTabs(selectedTabIndex?: number | undefined) {
        const outputs: TypedEvent<any, any>[] = [];
        const tabs = Array(5)
            .fill(0)
            .map(() => {
                const value = randomString();
                return {label: value, value};
            });

        assert.isAbove(tabs.length, 0);

        const fixture = await renderFixture(
            html`
                <${ToniqTopTabs.assign({
                    value: selectedTabIndex == undefined ? '' : tabs[selectedTabIndex]?.value || '',
                    tabs,
                })}
                    ${listen(ToniqTopTabs.events.valueChange, (event) => {
                        outputs.push(event);
                    })}
                ></${ToniqTopTabs}>
            `,
        );

        typedAssertInstanceOf(fixture, ToniqTopTabs);
        const tabElements = Array.from(fixture.shadowRoot.querySelectorAll(testIdBy('tab')));
        assert.lengthOf(tabElements, tabs.length);

        return {
            fixture,
            outputs,
            tabs,
            tabElements,
        };
    }

    it('updates the selected tab on click', async () => {
        const {outputs, tabs, tabElements} = await renderExampleTopTabs();
        await awaitedForEach(tabElements, async (tabElement, index) => {
            await clickElement(tabElement);
            await waitUntil(
                () => {
                    return outputs.length === index + 1;
                },
                '',
                {
                    timeout: 20_000,
                },
            );
            const latestEvent = outputs.slice(-1)[0];
            typedAssertNotNullish(latestEvent);
            assert.strictEqual(latestEvent.detail, tabs[index]?.value);
        });
    });

    it('fires no event if the current tab is clicked', async () => {
        const {outputs, tabElements} = await renderExampleTopTabs(0);
        assertLengthAtLeast(tabElements, 1);
        await clickElement(tabElements[0]);
        await assertThrows(
            async () =>
                await waitUntil(() => {
                    return outputs.length === 1;
                }),
        );
    });
});
