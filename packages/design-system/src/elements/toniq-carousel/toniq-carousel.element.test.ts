import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ToniqCarousel} from './toniq-carousel.element';

describe(ToniqCarousel.tagName, () => {
    it('renders empty carousel without error', async () => {
        const fixture = await renderFixture(html`
            <${ToniqCarousel.assign({
                templates: [],
            })}></${ToniqCarousel}>
        `);

        assertInstanceOf(fixture, ToniqCarousel);
    });
});
