import {toniqButtonBookEntries} from '../elements/toniq-button/toniq-button.element.book';
import {toniqCheckboxBookEntries} from '../elements/toniq-checkbox/toniq-checkbox.element.book';
import {toniqChipBookEntries} from '../elements/toniq-chip/toniq-chip.element.book';
import {toniqDropdownBookEntries} from '../elements/toniq-dropdown/toniq-dropdown.element.book';
import {toniqIconBookEntries} from '../elements/toniq-icon/toniq-icon.element.book';
import {iconPages} from '../icons/icons.book';
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
];
