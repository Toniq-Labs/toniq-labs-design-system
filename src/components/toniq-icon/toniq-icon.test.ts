import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {Copy16Icon} from '../../icons';
import {ToniqIcon} from './toniq-icon.component';

describe(ToniqIcon.tagName, () => {
    it('should be registered as a component', () => {
        const newlyCreated = document.createElement(ToniqIcon.tagName);
        assert.instanceOf(newlyCreated, ToniqIcon);
    });

    it('should render nothing when no icon is assigned', async () => {
        const rendered = await fixture(
            html`
                <${ToniqIcon}></${ToniqIcon}>
            `,
        );
        assert.isNull(rendered.shadowRoot?.querySelector('svg'));
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
        const toniqIconSvg = renderedToniqIcon.shadowRoot?.querySelector('svg')?.outerHTML.trim();

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
