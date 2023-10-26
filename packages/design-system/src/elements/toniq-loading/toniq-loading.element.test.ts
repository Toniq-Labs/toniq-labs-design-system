import {itCases} from '@augment-vir/browser-testing';
import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {assertIconEquals} from '../../element-testing/icon-testing';
import {LoaderAnimated24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqLoading, ToniqLoadingSizeEnum} from './toniq-loading.element';

describe(ToniqLoading.tagName, () => {
    it('renders the animated loading spinner icon', async () => {
        const renderedToniqLoading = await renderFixture(html`
            <${ToniqLoading.assign({size: ToniqLoadingSizeEnum.Small})}></${ToniqLoading}>
        `);

        assertInstanceOf(renderedToniqLoading, ToniqLoading);

        const renderedToniqIcon = renderedToniqLoading.shadowRoot.querySelector(ToniqIcon.tagName);
        assertInstanceOf(renderedToniqIcon, ToniqIcon);
        await assertIconEquals(renderedToniqIcon, LoaderAnimated24Icon);
    });

    async function testRender(testCase: {inputs: typeof ToniqLoading.inputsType}) {
        const renderedWrapper = await renderFixture(html`
            <div style="display: inline-block;">
                <${ToniqLoading.assign(testCase.inputs)}></${ToniqLoading}>
            </div>
        `);
        const renderedToniqLoading = renderedWrapper.querySelector(ToniqLoading.tagName);
        assertInstanceOf(renderedToniqLoading, ToniqLoading);

        const rect = renderedToniqLoading.getBoundingClientRect();

        return {
            size: {
                width: rect.width,
                height: rect.height,
            },
        };
    }

    itCases(testRender, [
        {
            it: 'renders in small size',
            input: {
                inputs: {
                    size: ToniqLoadingSizeEnum.Small,
                },
            },
            expect: {
                size: {
                    width: 24,
                    height: 24,
                },
            },
        },
        {
            it: 'renders in large size',
            input: {
                inputs: {
                    size: ToniqLoadingSizeEnum.Large,
                },
            },
            expect: {
                size: {
                    width: 36,
                    height: 36,
                },
            },
        },
        {
            it: 'renders in whole page size',
            input: {
                inputs: {
                    size: ToniqLoadingSizeEnum.WholePage,
                },
            },
            expect: {
                size: {
                    width: 48,
                    height: 500,
                },
            },
        },
    ]);
});
