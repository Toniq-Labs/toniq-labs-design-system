import {toniqButtonBookEntries} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCheckboxBookEntries} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookEntries} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqDropdownBookEntries} from '../elements/toniq-dropdown/toniq-dropdown.element.book';
import {toniqIconBookEntries} from '../elements/toniq-icon/toniq-icon.element.book';
import {toniqInputBookEntries} from '../elements/toniq-input/toniq-input.element.book';
import {toniqMiddleEllipsisBookEntries} from '../elements/toniq-middle-ellipsis/toniq-middle-ellipsis.element.book';
import {toniqRadioGroupBookEntries} from '../elements/toniq-radio-group/toniq-radio-group.element.book';
import {ToniqSliderBookEntries} from '../elements/toniq-slider/toniq-slider.element.book';
import {toniqToggleButtonBookEntries} from '../elements/toniq-toggle-button/toniq-toggle-button.element.book';
import {iconPages} from '../icons/icons.book';
import {toniqColorsBookPage} from '../styles/colors.book';
import {toniqFontsBookPage} from '../styles/fonts.book';
import {toniqElementsBookChapter} from './book-chapters/toniq-elements.book';
import {toniqIconsBookChapter} from './book-chapters/toniq-icons.book';
import {toniqStylesBookChapter} from './book-chapters/toniq-styles.book';

export const allElementBookEntries = [
    toniqElementsBookChapter,
    toniqIconsBookChapter,
    toniqStylesBookChapter,
    ...toniqButtonBookEntries,
    ...toniqCheckboxBookEntries,
    ...toniqChipBookEntries,
    ...toniqDropdownBookEntries,
    ...toniqIconBookEntries,
    ...iconPages,
    ...toniqInputBookEntries,
    ...toniqMiddleEllipsisBookEntries,
    ...toniqRadioGroupBookEntries,
    ...ToniqSliderBookEntries,
    ...toniqToggleButtonBookEntries,
    toniqColorsBookPage,
    toniqFontsBookPage,
];
