import {action} from '@storybook/addon-actions';
import {UIEvent} from 'react';

export function handleEventAsAction(event: UIEvent | Event) {
    const actionType = action(event.type);
    if (event instanceof CustomEvent) {
        actionType({detail: event.detail, fullEvent: event});
    } else {
        actionType(event);
    }
}
