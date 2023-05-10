import {defineShape, isValidShape} from 'object-shape-tester';
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

export const socialUrlsShapeDefinition = defineShape({
    Discord: '',
    Instagram: '',
    Telegram: '',
    TikTok: '',
    Twitch: '',
    Twitter: '',
    website: '',
});

export const emptySocialUrls = socialUrlsShapeDefinition.defaultValue;

/**
 * A record of URLs for each supported social platform. Set entries to an empty string if they have
 * no URL.
 */
export type SocialUrls = (typeof socialUrlsShapeDefinition)['runTimeType'];

export function isSocialUrlsObject(input: unknown): input is SocialUrls {
    return isValidShape(input, socialUrlsShapeDefinition);
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
