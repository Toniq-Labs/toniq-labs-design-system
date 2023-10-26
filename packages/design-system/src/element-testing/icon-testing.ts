import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ViraIcon} from 'vira';
import {removeChildComments} from '../augments/html';
import {ToniqIcon} from '../elements/toniq-icon/toniq-icon.element';
import {ToniqSvg} from '../icons';

export async function assertIconEquals(
    toniqIconInstance: (typeof ToniqIcon)['instanceType'],
    expectedIcon: ToniqSvg,
): Promise<void> {
    assert.strictEqual(toniqIconInstance.instanceInputs.icon, expectedIcon);

    const innerViraIcon = toniqIconInstance.shadowRoot.querySelector(ViraIcon.tagName);

    assertInstanceOf(innerViraIcon, ViraIcon);
    removeChildComments(innerViraIcon.shadowRoot);

    const actualIconHtml = innerViraIcon.shadowRoot.innerHTML.trim();
    assert.isNotEmpty(actualIconHtml);

    const expectedIconHtml = await getRenderedIconSvg(expectedIcon);
    assert.isNotEmpty(expectedIconHtml);

    assert.strictEqual(actualIconHtml, expectedIconHtml);
}

export async function getRenderedIconSvg(icon: ToniqSvg): Promise<string> {
    const rendered = await fixture(html`
        <div class="wrapper-div">${icon.svgTemplate}</div>
    `);
    removeChildComments(rendered);
    return rendered.innerHTML.trim();
}
