import {defineBookPage} from 'element-book';
import {CSSResult, classMap, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {toniqFontStyles} from '../../styles';
import {ToniqBoldSpace} from './toniq-bold-space.element';

const examples: {title: string; text: string; extraStyle?: CSSResult | undefined}[] = [
    {title: 'basic', text: 'Hello there'},
    {
        title: 'constrained width',
        text: 'Hello there, this text is much longer',
        extraStyle: css`
            ${ToniqBoldSpace} {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100px;
                height: 100px;
            }
        `,
    },
];

export const toniqBoldSpacePage = defineBookPage({
    title: ToniqBoldSpace.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                stateInitStatic: {
                    isBold: false,
                },
                styles: css`
                    .bold {
                        ${toniqFontStyles.boldFont}
                    }

                    ${example.extraStyle ?? css``}
                `,
                renderCallback({state, updateState}) {
                    return html`
                        <${ToniqBoldSpace.assign({text: example.text})}
                            ${listen('click', () => {
                                updateState({isBold: !state.isBold});
                            })}
                            class=${classMap({bold: state.isBold})}
                        ></${ToniqBoldSpace}>
                        More text
                    `;
                },
            });
        });
    },
});
