import {collapseWhiteSpace, kebabCaseToCamelCase} from '@augment-vir/common';
import {CSSResult} from 'lit';

export function cssToReactStyleObject(input: string | CSSResult): React.CSSProperties {
    if (typeof input !== 'string') {
        input = String(input);
    }
    const collapsedSpacesAndSemicolons = collapseWhiteSpace(input.replace(/"/g, '\\"')).replace(
        /;(?:\s*;)+/g,
        ';',
    );
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
