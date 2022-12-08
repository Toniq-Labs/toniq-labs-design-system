import {clamp} from './number';

export const threeDots = '...' as const;

/**
 * This function returns a truncated pagination array. The truncation is based on the current page
 * and the set pages to be shown. When pageCount exceeds pagesShown, the excess will be converted
 * into "...". Instances of "..." are included in the pagesShown count. MINIMUM_PAGE_SHOWN is
 * defaulted to 5 as lesser than 5 will show a [1 ...] or [1 ... ... 10] scenario which makes no
 * sense.
 */
export function pagination(
    currentPage: number,
    pageCount: number,
    pagesShown: number = 7,
    MINIMUM_PAGE_SHOWN: number = 5,
) {
    let delta: number;
    currentPage = clamp(currentPage, 1, pageCount);
    pagesShown = clamp(pagesShown, MINIMUM_PAGE_SHOWN, pageCount);
    const centerPagesShown = pagesShown - 5;
    const boundaryPagesShown = pagesShown - 3;

    if (pageCount <= pagesShown) {
        delta = pagesShown;
    } else {
        delta =
            currentPage < boundaryPagesShown || currentPage > pageCount - boundaryPagesShown
                ? boundaryPagesShown
                : centerPagesShown;
    }

    const range = {
        start: Math.round(currentPage - delta / 2),
        end: Math.round(currentPage + delta / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === pageCount) {
        range.start += 1;
        range.end += 1;
    }
    let pages: (string | number)[] =
        currentPage > delta
            ? getRange(Math.min(range.start, pageCount - delta), Math.min(range.end, pageCount))
            : getRange(1, Math.min(pageCount, delta + 1));

    if (currentPage > pageCount - boundaryPagesShown && pageCount > pagesShown) {
        pages = getRange(pageCount - delta, pageCount);
    }

    const withDots = (value: number, pair: (string | number)[]) =>
        pages.length + 1 !== pageCount ? pair : [value];
    const lastPage = pages[pages.length - 1];

    if (pages[0] !== 1) {
        pages = withDots(1, [
            1,
            threeDots,
        ]).concat(pages);
    }

    if (lastPage && lastPage < pageCount) {
        pages = pages.concat(
            withDots(pageCount, [
                threeDots,
                pageCount,
            ]),
        );
    }

    return pages;
}

/** Creates an array of numbers progressing from start up to end. */
export function getRange(start: number, end: number) {
    const length = end - start + 1;
    return Array.from({length}, (_, i) => start + i);
}
