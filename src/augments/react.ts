import {collapseWhiteSpace, kebabCaseToCamelCase} from 'augment-vir';

export function cssToReactStyleObject(input: string): React.CSSProperties {
    const collapsedSpacesAndSemicolons = collapseWhiteSpace(input).replace(/;(?:\s*;)+/g, ';');
    const innerCssJsonString = collapsedSpacesAndSemicolons
        .replace(/; /g, '", "')
        .replace(/: /g, '": "')
        .replace(';', '');
    const cssJson = `{"${innerCssJsonString}"}`;

    try {
        const cssObject = JSON.parse(cssJson);

        const reactStyles = Object.keys(cssObject).reduce((accum, key) => {
            var camelCased = kebabCaseToCamelCase(key);
            accum[camelCased] = cssObject[key];
            return accum;
        }, {} as Record<string, unknown>);

        return reactStyles;
    } catch (error) {
        console.error(`Failed to JSON parse: ${cssJson}`);
        throw error;
    }
}
