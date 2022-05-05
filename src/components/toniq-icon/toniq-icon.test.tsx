import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {assertNotNullish} from 'augment-vir/dist/jest-only';
import React from 'react';
import {Copy16Icon} from '../../icons/svgs/core-16/copy-16.icon';
import {ToniqIcon} from './toniq-icon';

describe(ToniqIcon.name, () => {
    it('should display icon SVG code', () => {
        const {container: toniqIconContainer} = render(<ToniqIcon icon={Copy16Icon} />);

        const toniqIconContainerSvgChildren = toniqIconContainer.querySelectorAll('svg');
        expect(toniqIconContainerSvgChildren.length).toBe(1);

        const toniqIconSvg = toniqIconContainerSvgChildren[0];
        assertNotNullish(toniqIconSvg);
        expect(toniqIconSvg).toBeInTheDocument();

        /**
         * Verify that the SVG code rendered inside of ToniqIcon matches the same icon's SVG code
         * rendered alone.
         */
        {
            const toniqIconSvgHtml = toniqIconSvg.outerHTML;

            const {container: bareSvgContainer} = render(
                <div dangerouslySetInnerHTML={{__html: Copy16Icon.svgString}}></div>,
            );

            const bareSvgContainerSvgChildren = bareSvgContainer.querySelectorAll('svg');
            expect(bareSvgContainerSvgChildren.length).toBe(1);

            const bareSvg = bareSvgContainerSvgChildren[0];
            assertNotNullish(bareSvg);
            expect(bareSvg).toBeInTheDocument();

            const bareSvgHtml = bareSvg.outerHTML;

            expect(toniqIconSvgHtml).toBe(bareSvgHtml);
        }
    });
});
