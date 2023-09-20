import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {assertInstanceOf} from 'run-time-assertions';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {assertIconEquals} from '../../element-testing/icon-testing';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {Copy24Icon, ToniqSvg} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqChip} from './toniq-chip.element';

describe(ToniqChip.tagName, () => {
    createElementRegistrationTest(ToniqChip);

    async function checkRendering(
        template: TemplateResult,
        textToRender: string,
        iconToRender: ToniqSvg,
    ) {
        const rendered = await fixture(template);
        assert.equal(getTextContentThroughShadow(rendered), textToRender);
        const iconInstance = queryThroughShadow(ToniqIcon.tagName, rendered);
        assertInstanceOf(iconInstance, ToniqIcon);
        assertIconEquals(iconInstance, iconToRender);
    }

    it(
        'should render child elements',
        createFixtureTest(async () => {
            const textToRender = 'Stuff in there';
            const iconToRender = Copy24Icon;

            await checkRendering(
                html`
                    <${ToniqChip}>
                        <${ToniqIcon.assign({
                            icon: iconToRender,
                        })}></${ToniqIcon}>
                        ${textToRender}
                    </${ToniqChip}>
                `,
                textToRender,
                iconToRender,
            );
        }),
    );
    it(
        'should render inputs',
        createFixtureTest(async () => {
            const textToRender = 'Stuff in there';
            const iconToRender = Copy24Icon;

            await checkRendering(
                html`
                    <${ToniqChip.assign({
                        icon: iconToRender,
                        text: textToRender,
                    })}></${ToniqChip}>
                `,
                textToRender,
                iconToRender,
            );
        }),
    );

    runFocusTests(
        html`
            <${ToniqChip}>Hello there</${ToniqChip}>
        `,
        false,
    );
});
