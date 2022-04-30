export class ToniqSvg {
    public readonly svgString: string;

    constructor(
        // TypeScript member property shorthand is not working here, probably because of React or Babel
        svgString: string,
    ) {
        this.svgString = svgString;
    }
}

/**
 * This is just a wrapper tagged template so we can get html formatting in the SVG strings, cause
 * most formatters (like Prettier, which we use) consider html tagged templates to be HTML code for
 * formatting purposes.
 */
export function html(strings: TemplateStringsArray, ...values: string[]): string {
    const combinedString = strings.reduce((accum, string, stringsIndex) => {
        const value = stringsIndex < values.length ? values[stringsIndex] : '';
        return accum + string + value;
    }, '');

    return combinedString;
}
