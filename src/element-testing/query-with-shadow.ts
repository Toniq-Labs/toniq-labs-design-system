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
        console.log(`> ${tagName}`);
        console.log(context.innerHTML.trim());
    }
    const finalQuery: string = Array.isArray(query) ? query[query.length - 1] ?? '' : query;
    if ('shadowRoot' in context && context.shadowRoot) {
        context = context.shadowRoot;
        if (debug) {
            console.log('>> shadowRoot');
            console.log(context.innerHTML.trim());
        }
    }

    if (Array.isArray(query)) {
        const newContext = context.querySelector(query[0] ?? '');
        if (!newContext) {
            return undefined;
        }
        const nextQueryArray = query.slice(1);
        const nextQueryInput: string | string[] =
            nextQueryArray.length > 1 ? nextQueryArray : nextQueryArray[0] ?? '';

        return queryThroughShadow(nextQueryInput, newContext, queryAll);
    }

    if (queryAll) {
        return Array.from(context.querySelectorAll(finalQuery));
    } else {
        return context.querySelector(finalQuery) ?? undefined;
    }
}

export function getTextContentThroughShadow(element: Element | ShadowRoot): string | undefined {
    if ('shadowRoot' in element && element.shadowRoot) {
        element = element.shadowRoot;
    }

    return element.textContent?.trim() ?? undefined;
}
