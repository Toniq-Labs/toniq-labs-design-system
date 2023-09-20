import {socialUrlsBookPage} from '../data/social-urls.book';
import {toniqBoldSpacePage} from '../elements/toniq-bold-space/toniq-bold-space.element.book';
import {toniqButtonPage} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCarouselBookPage} from '../elements/toniq-carousel/toniq-carousel.element.book';
import {toniqCheckboxPage} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookPage} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqDropdownPage} from '../elements/toniq-dropdown/toniq-dropdown.element.book';
import {toniqFeaturedFlipCardBookPage} from '../elements/toniq-featured-flip-card/toniq-featured-flip-card.element.book';
import {toniqFlipCardBookPage} from '../elements/toniq-flip-card/toniq-flip-card.element.book';
import {toniqHyperlinkPage} from '../elements/toniq-hyperlink/toniq-hyperlink.element.book';
import {toniqIconBookPage} from '../elements/toniq-icon/toniq-icon.element.book';
import {toniqInputPage} from '../elements/toniq-input/toniq-input.element.book';
import {toniqMiddleEllipsisPage} from '../elements/toniq-middle-ellipsis/toniq-middle-ellipsis.element.book';
import {toniqRadioGroupPage} from '../elements/toniq-radio-group/toniq-radio-group.element.book';
import {toniqSliderPage} from '../elements/toniq-slider/toniq-slider.element.book';
import {toniqToggleButtonBookPage} from '../elements/toniq-toggle-button/toniq-toggle-button.element.book';
import {toniqTooltipElementBookEntries} from '../elements/toniq-tooltip/toniq-tooltip.element.book';
import {toniqTopTabsPage} from '../elements/toniq-top-tabs/toniq-top-tabs.element.book';
import {iconPages, iconsBookPage} from '../icons/icons.book';
import {toniqColorsBookPage} from '../styles/colors.book';
import {toniqFontsBookPage} from '../styles/fonts.book';
import {dataBookPage} from './book-pages/data.book';
import {elementsBookPage} from './book-pages/elements.book';
import {stylesBookPage} from './book-pages/styles.book';

const topLevelPages = [
    elementsBookPage,
    iconsBookPage,
    stylesBookPage,
    dataBookPage,
];

const childPages = [
    ...iconPages,
    toniqButtonPage,
    toniqCarouselBookPage,
    toniqCheckboxPage,
    toniqChipBookPage,
    toniqDropdownPage,
    toniqFeaturedFlipCardBookPage,
    toniqFlipCardBookPage,
    toniqHyperlinkPage,
    toniqIconBookPage,
    toniqInputPage,
    toniqMiddleEllipsisPage,
    toniqRadioGroupPage,
    toniqSliderPage,
    toniqToggleButtonBookPage,
    ...toniqTooltipElementBookEntries,
    socialUrlsBookPage,
    toniqColorsBookPage,
    toniqFontsBookPage,
    toniqTopTabsPage,
    toniqBoldSpacePage,
].sort((a, b) => a.title.localeCompare(b.title));

export const allElementBookEntries = [
    ...topLevelPages,
    ...childPages,
];
