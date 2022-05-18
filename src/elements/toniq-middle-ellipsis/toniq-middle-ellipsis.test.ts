import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {
    getTextContentThroughShadow,
    queryThroughShadow,
} from '../../element-testing/query-with-shadow';
import {assertIconEquals} from '../../element-testing/test-icon';
import {ExternalLink24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ellipsisCharacter, ToniqMiddleEllipsis} from './toniq-middle-ellipsis.element';

describe(ToniqMiddleEllipsis.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqMiddleEllipsis.tagName);
        assert.instanceOf(newlyCreated, ToniqMiddleEllipsis);
    });

    it('should not render text when none is input', async () => {
        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}></${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), '');
        assert.isUndefined(queryThroughShadow(ToniqIcon.tagName, rendered));
    });

    it('should not even render icons when no text is assigned', async () => {
        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.externalLink, 'https://entrepot.app')}
                >
                </${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), '');
        assert.isUndefined(queryThroughShadow(ToniqIcon.tagName, rendered));
    });

    it('should render external link icon', async () => {
        const iconToRender = ExternalLink24Icon;

        const renderedWithToniqIcon = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.text, 'link')}
                    ${assign(ToniqMiddleEllipsis.props.externalLink, 'https://entrepot.app')}
                ></${ToniqMiddleEllipsis}>
            `,
        );
        const toniqIconInstance = queryThroughShadow(ToniqIcon.tagName, renderedWithToniqIcon);
        assertInstanceOf(toniqIconInstance, ToniqIcon);
        await assertIconEquals(toniqIconInstance, iconToRender);
    });

    it('should not truncate small text by default', async () => {
        const shortText = 'short';

        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.text, shortText)}
                ></${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), shortText);
    });

    it('should truncate long text by default', async () => {
        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.text, 'this-is-some-long-text')}
                ></${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), `this${ellipsisCharacter}text`);
    });

    it('should not truncate long text when count is high', async () => {
        const longText = 'this-is-some-long-text';

        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.text, longText)}
                    ${assign(ToniqMiddleEllipsis.props.letterCount, 500)}
                ></${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), longText);
    });

    it('should truncate short text when count is very low', async () => {
        const rendered = await fixture(
            html`
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis.props.text, 'abcde')}
                    ${assign(ToniqMiddleEllipsis.props.letterCount, 1)}
                ></${ToniqMiddleEllipsis}>
            `,
        );
        assert.equal(getTextContentThroughShadow(rendered), `a${ellipsisCharacter}e`);
    });
});
