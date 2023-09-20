import {assert, fixture} from '@open-wc/testing';
import {Copy16Icon, ToniqIcon} from '@toniq-labs/design-system';
import {
    assertIconEquals,
    getRenderedIconSvg,
} from '@toniq-labs/design-system/src/element-testing/icon-testing';
import {convertTemplateToString, html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
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
        const renderedCopyIcon = await getRenderedIconSvg(Copy16Icon);
        const renderedIconHtml = renderedCopyIcon.iconHtml.trim();
        // sanity check that the icon got rendered
        assert.include(renderedIconHtml, '</svg>');
        assert.include(convertTemplateToString(Copy16Icon.svgTemplate), '</svg>');
        const toniqIcon = renderedApp.shadowRoot?.querySelector(ToniqIcon.tagName);
        assertInstanceOf(toniqIcon, ToniqIcon);

        assertIconEquals(toniqIcon, Copy16Icon);
    });
});
