import {defineShape, isValidShape, or} from 'object-shape-tester';
import {
    BrandDiscord24Icon,
    BrandInstagram24Icon,
    BrandTelegram24Icon,
    BrandTiktok24Icon,
    BrandTwitch24Icon,
    BrandTwitter24Icon,
    Code24Icon,
    ToniqSvg,
} from '../icons';

export const socialUrlsShape = defineShape({
    Discord: or(undefined, ''),
    Instagram: or(undefined, ''),
    Telegram: or(undefined, ''),
    TikTok: or(undefined, ''),
    Twitch: or(undefined, ''),
    Twitter: or(undefined, ''),
    website: or(undefined, ''),
});

export const emptySocialUrls = socialUrlsShape.defaultValue;

/**
 * A record of URLs for each supported social platform. Set entries to an empty string if they have
 * no URL.
 */
export type SocialUrls = Partial<(typeof socialUrlsShape)['runTimeType']>;

export function isSocialUrlsObject(input: unknown): input is SocialUrls {
    return isValidShape(input, socialUrlsShape);
}

export const socialUrlIcons = {
    Discord: BrandDiscord24Icon,
    Instagram: BrandInstagram24Icon,
    Telegram: BrandTelegram24Icon,
    TikTok: BrandTiktok24Icon,
    Twitch: BrandTwitch24Icon,
    Twitter: BrandTwitter24Icon,
    website: Code24Icon,
} as const satisfies Record<keyof SocialUrls, ToniqSvg>;
