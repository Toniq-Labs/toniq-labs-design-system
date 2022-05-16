/**
 * Queries the given context for the given query. If an array query is given, each query in the
 * array is recursively called on context.
 */
// with falsy queryAll
export function queryWithShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll?: false | undefined,
): Element | undefined;
// with truthy queryAll
export function queryWithShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll: true,
): Element[];
// with possibly defined queryAll
export function queryWithShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll: boolean | undefined,
): Element | undefined | Element[];
// complete function signature
export function queryWithShadow(
    query: string | string[],
    context: Element | ShadowRoot,
    queryAll?: boolean | undefined,
): Element | undefined | Element[] {
    const finalQuery: string = Array.isArray(query) ? query[query.length - 1] ?? '' : query;
    if ('shadowRoot' in context && context.shadowRoot) {
        context = context.shadowRoot;
    }

    if (Array.isArray(query)) {
        const newContext = context.querySelector(query[0] ?? '');
        if (!newContext) {
            return undefined;
        }
        const nextQueryArray = query.slice(1);
        const nextQueryInput: string | string[] =
            nextQueryArray.length > 1 ? nextQueryArray : nextQueryArray[0] ?? '';

        return queryWithShadow(nextQueryInput, newContext, queryAll);
    }

    if (queryAll) {
        return Array.from(context.querySelectorAll(finalQuery));
    } else {
        return context.querySelector(finalQuery) ?? undefined;
    }
}
