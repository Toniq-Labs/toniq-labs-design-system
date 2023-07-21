import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {getByTestId} from '../../element-testing/test-id-testing';
import {toniqSliderTestIds} from './slider-logic';
import {ToniqSlider} from './toniq-slider.element';

describe(ToniqSlider.tagName, () => {
    createElementRegistrationTest(ToniqSlider);

    it(
        'should correctly set initial value',
        createFixtureTest(async () => {
            const initialValues = {
                value: 5,
                min: 10,
                max: 100,
            };
            const rendered = await fixture(
                html`
                    <${ToniqSlider.assign(initialValues)} />
                `,
            );

            const sliderInput = getByTestId(toniqSliderTestIds.slider, rendered);
            assertInstanceOf(sliderInput, HTMLInputElement);
            assert.strictEqual(
                parseInt(sliderInput.value),
                initialValues.min,
                'value is incorrect',
            );
            assert.strictEqual(parseInt(sliderInput.min), initialValues.min, 'min is incorrect');
            assert.strictEqual(parseInt(sliderInput.max), initialValues.max, 'max is incorrect');
        }),
    );

    it(
        'should correctly set label',
        createFixtureTest(async () => {
            const value = 5;
            const suffix = 'ICP';
            const rendered = await fixture(
                html`
                    <${ToniqSlider.assign({
                        min: 0,
                        max: 100,
                        value,
                        suffix,
                    })} />
                `,
            );

            const label = getByTestId(toniqSliderTestIds.label, rendered);
            assertInstanceOf(label, HTMLSpanElement);
            assert.equal(`${label.innerText}`, `${value} ${suffix}`);
        }),
    );

    it(
        'should correctly set suffix',
        createFixtureTest(async () => {
            const suffix = 'ICP';
            const rendered = await fixture(
                html`
                    <${ToniqSlider.assign({
                        max: 100,
                        min: 0,
                        value: 0,
                        suffix,
                    })} />
                `,
            );

            const label = getByTestId(toniqSliderTestIds.label, rendered);
            assertInstanceOf(label, HTMLSpanElement);
            assert.isTrue(new RegExp(suffix).test(label.innerText));
        }),
    );

    runFocusTests(
        html`
            <${ToniqSlider} />
        `,
        true,
    );
});
