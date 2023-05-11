import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {ToniqCarousel} from './toniq-carousel.element';

describe(ToniqCarousel.tagName, () => {
    it('renders empty carousel without error', async () => {
        const fixture = await renderFixture(
            html`
                <${ToniqCarousel}
                    ${assign(ToniqCarousel, {
                        templates: [],
                    })}
                ></${ToniqCarousel}>
            `,
        );

        typedAssertInstanceOf(fixture, ToniqCarousel);
    });
});
