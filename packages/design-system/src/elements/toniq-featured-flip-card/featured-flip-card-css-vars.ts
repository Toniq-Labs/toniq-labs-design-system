import {defineCssVars} from 'lit-css-vars';

export const defaultFeaturedFlipCardMainImageSize = 360;
export const featuredFlipCardImageGap = 8;

export function calculateFeaturedFlipCardSecondaryImageSize(mainImageSize: number): number {
    return (mainImageSize - featuredFlipCardImageGap) / 2;
}

export const internalFeaturedFlipCarCssVars = defineCssVars({
    'main-image-size': defaultFeaturedFlipCardMainImageSize,
    'secondary-image-size': calculateFeaturedFlipCardSecondaryImageSize(
        defaultFeaturedFlipCardMainImageSize,
    ),
});
