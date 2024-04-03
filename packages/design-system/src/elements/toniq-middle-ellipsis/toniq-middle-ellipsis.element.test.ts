import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {assertIconEquals} from '../../element-testing/icon-testing';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {ExternalLink24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqMiddleEllipsis, ellipsisCharacter} from './toniq-middle-ellipsis.element';

describe(ToniqMiddleEllipsis.tagName, () => {
    createElementRegistrationTest(ToniqMiddleEllipsis);

    it(
        'should not render text when none is input',
        createFixtureTest(async () => {
            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    copyOnClick: true,
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), '');
            assert.isUndefined(queryThroughShadow(ToniqIcon.tagName, rendered));
        }),
    );

    it(
        'should not even render icons when no text is assigned',
        createFixtureTest(async () => {
            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    externalLink: 'https://entrepot.app',
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), '');
            assert.isUndefined(queryThroughShadow(ToniqIcon.tagName, rendered));
        }),
    );

    it(
        'should render external link icon',
        createFixtureTest(async () => {
            const iconToRender = ExternalLink24Icon;

            const renderedWithToniqIcon = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    text: 'link',
                    externalLink: 'https://entrepot.app',
                })}></${ToniqMiddleEllipsis}>
            `);
            const toniqIconInstance = queryThroughShadow(ToniqIcon.tagName, renderedWithToniqIcon);
            assertInstanceOf(toniqIconInstance, ToniqIcon);
            await assertIconEquals(toniqIconInstance, iconToRender);
        }),
    );

    it(
        'should not truncate small text by default',
        createFixtureTest(async () => {
            const shortText = 'short';

            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    text: shortText,
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), shortText);
        }),
    );

    it(
        'should truncate long text by default',
        createFixtureTest(async () => {
            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    text: 'this-is-some-long-text',
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), `this${ellipsisCharacter}text`);
        }),
    );

    it(
        'should not truncate long text when count is high',
        createFixtureTest(async () => {
            const longText = 'this-is-some-long-text';

            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    text: longText,
                    letterCount: 500,
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), longText);
        }),
    );

    it(
        'should truncate short text when count is very low',
        createFixtureTest(async () => {
            const rendered = await fixture(html`
                <${ToniqMiddleEllipsis.assign({
                    text: 'abcde',
                    letterCount: 1,
                })}></${ToniqMiddleEllipsis}>
            `);
            assert.equal(getTextContentThroughShadow(rendered), `a${ellipsisCharacter}e`);
        }),
    );

    runFocusTests(
        html`
            <${ToniqMiddleEllipsis.assign({
                text: 'entrepot',
                externalLink: 'https://entrepot.app',
            })}></${ToniqMiddleEllipsis}>
        `,
        true,
        'with link input',
    );

    runFocusTests(
        html`
            <${ToniqMiddleEllipsis.assign({
                copyOnClick: true,
                text: 'copy',
            })}></${ToniqMiddleEllipsis}>
        `,
        true,
        'with copyable set to true',
    );

    runFocusTests(
        html`
            <${ToniqMiddleEllipsis.assign({
                text: 'not tabbable',
            })}></${ToniqMiddleEllipsis}>
        `,
        false,
        'with no interaction',
    );
});