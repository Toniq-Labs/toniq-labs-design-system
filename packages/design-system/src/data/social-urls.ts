import {defineShape, isValidShape, or} from 'object-shape-tester';
import {
    BrandDiscord24Icon,
    BrandDistrikt24Icon,
    BrandDscvr24Icon,
    BrandInstagram24Icon,
    BrandMedium24Icon,
    BrandTelegram24Icon,
    BrandTiktok24Icon,
    BrandTwitch24Icon,
    BrandTwitter24Icon,
    ToniqSvg,
    World24Icon,
} from '../icons';

export const socialUrlsShape = defineShape({
    discord: or(undefined, ''),
    distrikt: or(undefined, ''),
    dscvr: or(undefined, ''),
    instagram: or(undefined, ''),
    medium: or(undefined, ''),
    telegram: or(undefined, ''),
    tikTok: or(undefined, ''),
    twitch: or(undefined, ''),
    twitter: or(undefined, ''),
    website: or(undefined, ''),
});

export const emptySocialUrls = socialUrlsShape.defaultValue;

/**
 * A record of URLs for each supported social platform. Set entries to an empty string if they have
 * no URL.
 */
export type SocialUrls = (typeof socialUrlsShape)['runTimeType'];

export function isSocialUrlsObject(input: unknown): input is SocialUrls {
    return isValidShape(input, socialUrlsShape);
}

export const socialUrlIcons = {
    discord: BrandDiscord24Icon,
    instagram: BrandInstagram24Icon,
    telegram: BrandTelegram24Icon,
    tikTok: BrandTiktok24Icon,
    distrikt: BrandDistrikt24Icon,
    twitch: BrandTwitch24Icon,
    dscvr: BrandDscvr24Icon,
    medium: BrandMedium24Icon,
    twitter: BrandTwitter24Icon,
    website: World24Icon,
} as const satisfies Record<keyof SocialUrls, ToniqSvg>;
