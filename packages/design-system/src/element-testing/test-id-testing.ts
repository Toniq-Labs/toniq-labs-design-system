import {testIdAttribute} from '../directives/test-id.directive';
import {queryThroughShadow} from './query-through-shadow';

export function getByTestId(
    testId: string,
    context: Element | ShadowRoot,
    queryAll?: false | undefined,
    debug?: boolean | undefined,
): Element | undefined {
    return queryThroughShadow(createTestIdSelector(testId), context, queryAll, debug);
}

export function createTestIdSelector(testId: string): string {
    return `[${testIdAttribute}="${testId}"]`;
}
