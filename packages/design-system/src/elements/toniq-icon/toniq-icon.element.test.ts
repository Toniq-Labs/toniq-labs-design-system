import {assert, fixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {createFixtureTest} from '../../element-testing/fixture-test';
import {assertIconEquals} from '../../element-testing/icon-testing';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {createElementRegistrationTest} from '../../element-testing/test-element-creation';
import {runFocusTests} from '../../element-testing/test-focus';
import {Copy16Icon} from '../../icons';
import {ToniqIcon} from './toniq-icon.element';

describe(ToniqIcon.tagName, () => {
    createElementRegistrationTest(ToniqIcon);

    it(
        'should render nothing when no icon is assigned',
        createFixtureTest(async () => {
            const rendered = await fixture(html`
                <${ToniqIcon.assign({
                    icon: Copy16Icon,
                })}></${ToniqIcon}>
            `);
            assert.isUndefined(queryThroughShadow('svg', rendered));
        }),
    );

    it(
        'should render assigned icon',
        createFixtureTest(async () => {
            const iconToRender = Copy16Icon;

            const renderedToniqIcon = await fixture(html`
                <${ToniqIcon.assign({
                    icon: iconToRender,
                })}></${ToniqIcon}>
            `);

            assertInstanceOf(renderedToniqIcon, ToniqIcon, 'is not a rendered ToniqIcon');
            await assertIconEquals(renderedToniqIcon, iconToRender);
        }),
    );

    runFocusTests(
        html`
            <${ToniqIcon.assign({
                icon: Copy16Icon,
            })}></${ToniqIcon}>
        `,
        false,
    );
});
