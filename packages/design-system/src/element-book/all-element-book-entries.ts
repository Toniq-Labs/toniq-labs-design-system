import {socialUrlsBookPage} from '../data/social-urls.book';
import {toniqAlertPage} from '../elements/toniq-alert/toniq-alert.element.book';
import {toniqBoldSpacePage} from '../elements/toniq-bold-space/toniq-bold-space.element.book';
import {toniqButtonPage} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCarouselBookPage} from '../elements/toniq-carousel/toniq-carousel.element.book';
import {toniqCheckboxPage} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookPage} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqDateTimeBookPage} from '../elements/toniq-date-time/toniq-date-time.element.book';
import {toniqDropdownPage} from '../elements/toniq-dropdown/toniq-dropdown.element.book';
import {toniqErrorMessageBookPage} from '../elements/toniq-error-message/toniq-error-message.element.book';
import {toniqFeaturedFlipCardBookPage} from '../elements/toniq-featured-flip-card/toniq-featured-flip-card.element.book';
import {toniqFlipCardBookPage} from '../elements/toniq-flip-card/toniq-flip-card.element.book';
import {toniqHeadingBookPage} from '../elements/toniq-heading/toniq-heading.element.book';
import {toniqHyperlinkPage} from '../elements/toniq-hyperlink/toniq-hyperlink.element.book';
import {toniqIconBookPage} from '../elements/toniq-icon/toniq-icon.element.book';
import {toniqInputPage} from '../elements/toniq-input/toniq-input.element.book';
import {toniqListTableElementBookPage} from '../elements/toniq-list-table/toniq-list-table.element.book';
import {toniqLoadingBookPage} from '../elements/toniq-loading/toniq-loading.element.book';
import {toniqMiddleEllipsisPage} from '../elements/toniq-middle-ellipsis/toniq-middle-ellipsis.element.book';
import {toniqNfidIdentityPage} from '../elements/toniq-nfid-identitykit/toniq-nfid-identitykit.element.book';
import {toniqProgressBookPage} from '../elements/toniq-progress/toniq-progress.element.book';
import {toniqRadioGroupPage} from '../elements/toniq-radio-group/toniq-radio-group.element.book';
import {toniqSliderPage} from '../elements/toniq-slider/toniq-slider.element.book';
import {toniqToggleButtonBookPage} from '../elements/toniq-toggle-button/toniq-toggle-button.element.book';
import {toniqTooltipElementBookEntries} from '../elements/toniq-tooltip/toniq-tooltip.element.book';
import {toniqTopTabsPage} from '../elements/toniq-top-tabs/toniq-top-tabs.element.book';
import {iconPages, iconsBookPage} from '../icons/icons.book';
import {toniqColorsBookPage} from '../styles/colors.book';
import {toniqFontsBookPage} from '../styles/fonts.book';
import {toniqShadowsBookPage} from '../styles/shadows.book';
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
    ...toniqTooltipElementBookEntries,
    socialUrlsBookPage,
    toniqBoldSpacePage,
    toniqAlertPage,
    toniqButtonPage,
    toniqCarouselBookPage,
    toniqCheckboxPage,
    toniqChipBookPage,
    toniqColorsBookPage,
    toniqDateTimeBookPage,
    toniqDropdownPage,
    toniqErrorMessageBookPage,
    toniqFeaturedFlipCardBookPage,
    toniqFlipCardBookPage,
    toniqFontsBookPage,
    toniqHeadingBookPage,
    toniqHyperlinkPage,
    toniqNfidIdentityPage,
    toniqIconBookPage,
    toniqInputPage,
    toniqLoadingBookPage,
    toniqMiddleEllipsisPage,
    toniqProgressBookPage,
    toniqRadioGroupPage,
    toniqShadowsBookPage,
    toniqSliderPage,
    toniqToggleButtonBookPage,
    toniqTopTabsPage,
    toniqListTableElementBookPage,
].sort((a, b) => a.title.localeCompare(b.title));

export const allElementBookEntries = [
    ...topLevelPages,
    ...childPages,
];
