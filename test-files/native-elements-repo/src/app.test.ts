import {assert, expect, fixture} from '@open-wc/testing';
import {Copy16Icon} from '@toniq-labs/design-system';
import {html} from 'element-vir';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {AppElement} from './app.element';

describe(AppElement.tagName, () => {
    it('should be registered as a component', () => {
        const newlyCreated = document.createElement(AppElement.tagName);
        assert.instanceOf(newlyCreated, AppElement);
    });

    it('should include icon svg', async () => {
        const renderedApp = await fixture(html`<${AppElement}></${AppElement}>`);
        const renderedIcon = await fixture(
            html`
                ${unsafeHTML(Copy16Icon.svgString)}
            `,
        );
        const renderedIconHtml = renderedIcon.outerHTML.trim();
        // sanity check that the icon got rendered
        expect(renderedIconHtml).to.include('</svg>');
        expect(Copy16Icon.svgString).to.include('</svg>');

        const toniqIcon = renderedApp.shadowRoot?.querySelector('toniq-icon');
        const preparedHtml = toniqIcon?.shadowRoot?.innerHTML;
        expect(preparedHtml).to.include(renderedIconHtml);
    });
});
