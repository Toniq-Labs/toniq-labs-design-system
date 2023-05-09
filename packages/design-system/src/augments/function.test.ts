import {assert, waitUntil} from '@open-wc/testing';
import {throttle} from './function';

describe(throttle.name, () => {
    it('prevents immediate refiring', () => {
        let timesFired = 0;

        const throttledUpdate = throttle(1000, () => {
            timesFired++;
        });

        const maxCallCount = 10;

        for (let callIndex = 0; callIndex < maxCallCount; callIndex++) {
            throttledUpdate();
        }

        assert.isBelow(timesFired, maxCallCount, 'throttled callback fired too frequently');
    });

    it('allows refiring after the delay time', async () => {
        let timesFired = 0;
        const delayMs = 500;
        const startTime = Date.now();

        const throttledUpdate = throttle(delayMs, () => {
            timesFired++;
        });

        await waitUntil(() => {
            throttledUpdate();
            return timesFired > 1;
        });
        const waitTime = Date.now() - startTime;

        assert.isAbove(
            waitTime,
            delayMs -
                // -10 for a small buffer
                10,
            'throttled update did not wait long enough',
        );
    });
});
