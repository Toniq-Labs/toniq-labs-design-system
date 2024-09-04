type AnyEvent = MouseEvent | TouchEvent;

export function createClickOutsideHandler<T extends HTMLElement = HTMLDivElement>(
    handler: (event: AnyEvent) => void,
): {ref: T | null; setRef: (element: T | null) => void; removeListeners: () => void} {
    let ref: T | null = null;

    const setRef = (element: T | null) => {
        ref = element;
    };

    const listener = (event: AnyEvent) => {
        const el = ref;
        if (!el || el.contains(event.target as Node)) return;

        handler(event);
    };

    const addListeners = () => {
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
    };

    const removeListeners = () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    };

    addListeners();

    return {ref, setRef, removeListeners};
}
