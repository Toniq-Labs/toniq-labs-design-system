import {assert, fixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {assertInstanceOf} from '../../element-testing/assertion-helpers';
import {queryThroughShadow} from '../../element-testing/query-through-shadow';
import {assertIconEquals} from '../../element-testing/test-icon';
import {Copy24Icon} from '../../icons';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';
import {ToniqChip} from './toniq-chip.element';

describe(ToniqChip.tagName, () => {
    it('should be registered as a custom element', () => {
        const newlyCreated = document.createElement(ToniqChip.tagName);
        assert.instanceOf(newlyCreated, ToniqChip);
    });

    it('should render child elements', async () => {
        const textToRender = 'Stuff in there';
        const iconToRender = Copy24Icon;

        const rendered = await fixture(
            html`
                <${ToniqChip}>
                    <${ToniqIcon}
                        ${assign(ToniqIcon.props.icon, iconToRender)}
                    >
                    </${ToniqIcon}>
                    ${textToRender}
                </${ToniqChip}>
            `,
        );
        assert.equal(rendered.textContent?.trim(), textToRender);
        const iconInstance = queryThroughShadow(ToniqIcon.tagName, rendered);
        assertInstanceOf(iconInstance, ToniqIcon);
        assertIconEquals(iconInstance, iconToRender);
    });
});
