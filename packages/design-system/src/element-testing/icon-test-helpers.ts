import {assert, fixture} from '@open-wc/testing';
import {html, unsafeHTML} from 'element-vir';
import {ToniqIcon} from '../elements/toniq-icon/toniq-icon.element';
import {ToniqSvg} from '../icons';
import {assertInstanceOf} from './assertion-helpers';
import {queryThroughShadow} from './query-through-shadow';

export async function assertIconEquals(
    toniqIconInstance: (typeof ToniqIcon)['instanceType'],
    expectedIcon: ToniqSvg,
): Promise<void> {
    assert.equal(toniqIconInstance.instanceInputs.icon, expectedIcon);

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
