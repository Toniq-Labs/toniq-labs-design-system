import {assert, expect, fixture} from '@open-wc/testing';
import {Copy16Icon} from '@toniq-labs/design-system';
import {convertTemplateToString, html} from 'element-vir';
import {AppElement} from './app.element';

describe(AppElement.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(AppElement.tagName);
        assert.instanceOf(newlyCreated, AppElement);
    });

    it('should include icon svg', async () => {
        const renderedApp = await fixture(
            html`
                <${AppElement}></${AppElement}>
            `,
        );
        const renderedIcon = await fixture(Copy16Icon.svgTemplate);
        const renderedIconHtml = renderedIcon.outerHTML.trim();
        // sanity check that the icon got rendered
        expect(renderedIconHtml).to.include('</svg>');
        expect(convertTemplateToString(Copy16Icon.svgTemplate)).to.include('</svg>');

        const toniqIcon = renderedApp.shadowRoot?.querySelector('toniq-icon');
        const preparedHtml = toniqIcon?.shadowRoot?.innerHTML;
        expect(preparedHtml).to.include(renderedIconHtml);
    });
});
