import {assert, fixture} from '@open-wc/testing';
import {FunctionalElementInstance, html} from 'element-vir';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {ToniqIcon} from '../elements/toniq-icon/toniq-icon.element';
import {ToniqSvg} from '../icons';
import {assertInstanceOf} from './assertion-helpers';
import {queryThroughShadow} from './query-with-shadow';

export async function assertIconEquals(
    toniqIconInstance: FunctionalElementInstance<typeof ToniqIcon>,
    expectedIcon: ToniqSvg,
): Promise<void> {
    assert.equal(toniqIconInstance.icon, expectedIcon);

    const renderedInnerSvg = queryThroughShadow('svg', toniqIconInstance);
    assertInstanceOf(renderedInnerSvg, SVGSVGElement);
    const actualSvg = renderedInnerSvg.outerHTML.trim();

    const expectedSvg = await getRenderedIconSvg(expectedIcon);

    assert.isNotEmpty(actualSvg);
    assert.equal(actualSvg, expectedSvg);
}

async function getRenderedIconSvg(icon: ToniqSvg): Promise<string> {
    const rendered = await fixture(
        html`
            ${unsafeHTML(icon.svgString)}
        `,
    );
    return rendered.outerHTML.trim();
}
