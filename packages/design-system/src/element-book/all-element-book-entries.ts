import {socialUrlsBookPage} from '../data/social-urls.book';
import {toniqButtonBookEntries} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCarouselBookEntries} from '../elements/toniq-carousel/toniq-carousel.element.book';
import {toniqCheckboxBookEntries} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookEntries} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqDropdownBookEntries} from '../elements/toniq-dropdown/toniq-dropdown.element.book';
import {toniqFlipCardBookEntries} from '../elements/toniq-flip-card/toniq-flip-card.element.book';
import {toniqHyperlinkBookEntries} from '../elements/toniq-hyperlink/toniq-hyperlink.element.book';
import {toniqIconBookEntries} from '../elements/toniq-icon/toniq-icon.element.book';
import {toniqInputBookEntries} from '../elements/toniq-input/toniq-input.element.book';
import {toniqMiddleEllipsisBookEntries} from '../elements/toniq-middle-ellipsis/toniq-middle-ellipsis.element.book';
import {toniqRadioGroupBookEntries} from '../elements/toniq-radio-group/toniq-radio-group.element.book';
import {toniqSliderBookEntries} from '../elements/toniq-slider/toniq-slider.element.book';
import {toniqToggleButtonBookEntries} from '../elements/toniq-toggle-button/toniq-toggle-button.element.book';
import {iconPages} from '../icons/icons.book';
import {toniqColorsBookPage} from '../styles/colors.book';
import {toniqFontsBookPage} from '../styles/fonts.book';
import {dataBookChapter} from './book-chapters/data.book';
import {elementsBookChapter} from './book-chapters/elements.book';
import {iconsBookChapter} from './book-chapters/icons.book';
import {stylesBookChapter} from './book-chapters/styles.book';

export const allElementBookEntries = [
    elementsBookChapter,
    iconsBookChapter,
    stylesBookChapter,
    ...iconPages,
    ...toniqButtonBookEntries,
    ...toniqCarouselBookEntries,
    ...toniqCheckboxBookEntries,
    ...toniqChipBookEntries,
    ...toniqDropdownBookEntries,
    ...toniqFlipCardBookEntries,
    ...toniqHyperlinkBookEntries,
    ...toniqIconBookEntries,
    ...toniqInputBookEntries,
    ...toniqMiddleEllipsisBookEntries,
    ...toniqRadioGroupBookEntries,
    ...toniqSliderBookEntries,
    ...toniqToggleButtonBookEntries,
    toniqColorsBookPage,
    toniqFontsBookPage,
    dataBookChapter,
    socialUrlsBookPage,
];
