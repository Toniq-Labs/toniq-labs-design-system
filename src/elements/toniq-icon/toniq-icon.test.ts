import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {Copy16Icon} from '../../icons';
import {ToniqIcon} from './toniq-icon.element';

describe(ToniqIcon.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqIcon.tagName);
        assert.instanceOf(newlyCreated, ToniqIcon);
    });

    it('should render nothing when no icon is assigned', async () => {
        const rendered = await fixture(
            html`
                <${ToniqIcon}></${ToniqIcon}>
            `,
        );
        assert.isUndefined(queryThroughShadow('svg', rendered));
    });

    it('should render assigned icon', async () => {
        const iconToRender = Copy16Icon;

        const renderedToniqIcon = await fixture(
            html`
                <${ToniqIcon}
                    ${assign(ToniqIcon.props.icon, iconToRender)}
                ></${ToniqIcon}>
            `,
        );
        const toniqIconSvg = queryThroughShadow('svg', renderedToniqIcon)?.outerHTML.trim();

        const iconSvg = (
            await fixture(
                html`
                    ${unsafeHTML(iconToRender.svgString)}
                `,
            )
        ).outerHTML.trim();

        assert.isNotEmpty(iconSvg);

        assert.equal(toniqIconSvg, iconSvg);
    });
});
