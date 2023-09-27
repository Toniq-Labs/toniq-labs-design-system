export function removeChildComments(element: Node) {
    Array.from(element.childNodes).forEach((child) => {
        if (child.nodeType === Node.COMMENT_NODE) {
            child.remove();
        }
    });
}
