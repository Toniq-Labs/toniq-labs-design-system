/**
 * Queries the given context for the given query. If an array query is given, each query in the
 * array is recursively called on context.
 */
// with falsy queryAll
export function queryThroughShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll?: false | undefined,
    debug?: boolean | undefined,
): Element | undefined;
// with truthy queryAll
export function queryThroughShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll: true,
    debug?: boolean | undefined,
): Element[];
// with possibly defined queryAll
export function queryThroughShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll: boolean | undefined,
    debug?: boolean | undefined,
): Element | undefined | Element[];
// complete function signature
export function queryThroughShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll?: boolean | undefined,
    debug?: boolean | undefined,
): Element | undefined | Element[] {
    if (debug) {
        const tagName = 'tagName' in context ? context.tagName : 'shadowRoot';
        console.debug(`> ${tagName}`);
        console.debug(context.innerHTML.trim());
    }
    const finalQuery: string = Array.isArray(query) ? query[query.length - 1] ?? '' : query;

    if (Array.isArray(query)) {
        const newContext = context.querySelector(query[0] ?? '');
        if (newContext) {
            const nextQueryArray = query.slice(1);
            const nextQueryInput: string | string[] =
                nextQueryArray.length > 1 ? nextQueryArray : nextQueryArray[0] ?? '';

            return queryThroughShadow(nextQueryInput, newContext, queryAll);
        } else if ('shadowRoot' in context && context.shadowRoot) {
            return queryThroughShadow(query, context.shadowRoot, queryAll, debug);
        } else {
            return undefined;
        }
    }

    if (queryAll) {
        const topLevelQuery = Array.from(context.querySelectorAll(finalQuery));
        if (topLevelQuery.length) {
            return topLevelQuery;
        } else if ('shadowRoot' in context && context.shadowRoot) {
            return queryThroughShadow(query, context.shadowRoot, queryAll, debug);
        } else {
            return [];
        }
    } else {
        const returnValue = context.querySelector(finalQuery);
        if (returnValue) {
            return returnValue ?? undefined;
        } else if ('shadowRoot' in context && context.shadowRoot) {
            return queryThroughShadow(query, context.shadowRoot, queryAll, debug);
        } else {
            return undefined;
        }
    }
}

export function getTextContentThroughShadow(element: Element | ShadowRoot): string {
    const topLevelTextContent: string = element.textContent?.trim() ?? '';

    if (topLevelTextContent) {
        return topLevelTextContent;
    } else if ('shadowRoot' in element && element.shadowRoot) {
        return getTextContentThroughShadow(element.shadowRoot);
    }

    return topLevelTextContent;
}
