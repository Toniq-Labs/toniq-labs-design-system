import {assert, fixture, fixtureSync} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {createFocusTests} from '../../element-testing/test-focus';
import {ToniqSlider} from './toniq-slider.element';

describe(ToniqSlider.tagName, () => {
    createElementRegistrationTest(ToniqSlider);

    it(
        'should correctly set default value',
        createFixtureTest(async () => {
            const sliderDefault = {
                value: 5,
                min: 10,
                max: 100,
            };
            const rendered = await fixture(
                html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider.props.value, sliderDefault.value)}
                        ${assign(ToniqSlider.props.min, sliderDefault.min)}
                        ${assign(ToniqSlider.props.max, sliderDefault.max)}
                    />
                `,
            );

            const sliderInput = queryThroughShadow('input.slider', rendered);
            assertInstanceOf(sliderInput, HTMLInputElement);
            assert.strictEqual(
                parseInt(sliderInput.value),
                sliderDefault.value < sliderDefault.min ? sliderDefault.min : sliderDefault.value,
            );
            assert.strictEqual(parseInt(sliderInput.min), sliderDefault.min);
            assert.strictEqual(parseInt(sliderInput.max), sliderDefault.max);
        }),
    );

    it(
        'should correctly set label',
        createFixtureTest(async () => {
            const value = 5;
            const suffix = 'ICP';
            const rendered = await fixtureSync(
                html`
                    <${ToniqSlider}
                        ${assign(ToniqSlider.props.value, value)}
                        ${assign(ToniqSlider.props.suffix, suffix)}
                    />
                `,
            );

            const label = queryThroughShadow('span.label', rendered);
            assertInstanceOf(label, HTMLSpanElement);
            assert.equal(`${label.innerText}`, `${value} ${suffix}`);
        }),
    );

    it(
        'should correctly set suffix',
        createFixtureTest(async () => {
            const suffix = 'ICP';
            const rendered = await fixtureSync(
                html`
                    <${ToniqSlider} ${assign(ToniqSlider.props.suffix, suffix)} />
                `,
            );

            const label = queryThroughShadow('span.label', rendered);
            assertInstanceOf(label, HTMLSpanElement);
            assert.isTrue(new RegExp(suffix).test(label.innerText));
        }),
    );

    createFocusTests(
        html`
            <${ToniqSlider} />
        `,
        true,
    );
});
