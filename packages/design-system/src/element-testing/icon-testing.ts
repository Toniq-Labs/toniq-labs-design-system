import {assert, fixture} from '@open-wc/testing';
import {assertInstanceOf} from 'run-time-assertions';
import {ViraIcon} from 'vira';
import {ToniqIcon} from '../elements/toniq-icon/toniq-icon.element';
import {ToniqSvg} from '../icons';
import {queryThroughShadow} from './query-through-shadow';

export async function assertIconEquals(
    toniqIconInstance: (typeof ToniqIcon)['instanceType'],
    expectedIcon: ToniqSvg,
): Promise<void> {
    assert.strictEqual(toniqIconInstance.instanceInputs.icon, expectedIcon);

    const renderedInnerSvg = queryThroughShadow(
        [
            ViraIcon.tagName,
            'svg',
        ],
        toniqIconInstance,
    );
    assertInstanceOf(renderedInnerSvg, SVGSVGElement, 'is not an svg element');
    const actualSvg = renderedInnerSvg.outerHTML.trim();

    const {iconHtml} = await getRenderedIconSvg(expectedIcon);

    assert.isNotEmpty(actualSvg);
    assert.strictEqual(actualSvg, iconHtml);
}

export async function getRenderedIconSvg(icon: ToniqSvg): Promise<{
    iconHtml: string;
    iconElement: Element;
}> {
    const rendered = await fixture(icon.svgTemplate);
    return {
        iconElement: rendered,
        iconHtml: rendered.outerHTML.trim(),
    };
}
