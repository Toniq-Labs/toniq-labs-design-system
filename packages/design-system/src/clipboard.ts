/**
 * If we need to support more complex options, here's a wrapper that can be updated in the future.
 * All modern browsers now support the simple navigator.clipboard API though.
 */
export async function copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
}
