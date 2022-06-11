import {action} from '@storybook/addon-actions';

export function handleEventAsAction(event: Event) {
    const actionType = action(event.type);
    if (event instanceof CustomEvent) {
        actionType({detail: event.detail, fullEvent: event});
    } else {
        actionType(event);
    }
}
