import {randomString} from '@augment-vir/browser';
import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {collapseWhiteSpace} from '@augment-vir/common';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {ToniqBoldSpace} from './toniq-bold-space.element';

describe(ToniqBoldSpace.tagName, () => {
    it('contains the input text', async () => {
        const randomText = randomString();
        const fixture = await renderFixture(
            html`
                <${ToniqBoldSpace.assign({text: randomText})}></${ToniqBoldSpace}>
            `,
        );

        typedAssertInstanceOf(fixture, ToniqBoldSpace);

        assert.strictEqual(
            collapseWhiteSpace(fixture.shadowRoot.textContent || ''),
            [
                randomText,
                randomText,
            ].join(' '),
        );
    });
});
