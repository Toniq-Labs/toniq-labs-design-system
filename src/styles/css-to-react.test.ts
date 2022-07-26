import {assert} from '@open-wc/testing';
import {css} from 'element-vir';
import {CSSResult} from 'lit';
import {CSSProperties} from 'react';
import {toniqFontStyles} from '../styles';
import {cssToReactStyleObject} from './css-to-react';

describe(cssToReactStyleObject.name, () => {
    it('should create objects correctly', async () => {
        const comparisons: {
            css: CSSResult;
            react: CSSProperties;
        }[] = [
            {
                css: toniqFontStyles.h3Font,
                react: {
                    color: 'var(--toniq-page-primary-foreground-color, #000000)',
                    fontFamily: "var(--toniq-font-toniq-font-family, 'Rubik', sans-serif)",
                    fontSize: 'var(--toniq-font-h3-font-size, 24px)',
                    fontStyle: 'normal',
                    fontWeight: 'var(--toniq-font-bold-font-weight, 600)',
                    lineHeight: 'var(--toniq-font-h3-line-height, 32px)',
                },
            },
            {
                // Prettier ignored so the double quotes stay.
                // prettier-ignore
                css: css`
                    background: url('some-url.png');
                    background-image: url("another-url.png");
                `,
                react: {
                    background: "url('some-url.png')",
                    backgroundImage: 'url("another-url.png")',
                },
            },
        ];

        comparisons.forEach((comparison) => {
            const newReact = cssToReactStyleObject(comparison.css);
            assert.deepEqual(newReact, comparison.react);
        });
    });
});
