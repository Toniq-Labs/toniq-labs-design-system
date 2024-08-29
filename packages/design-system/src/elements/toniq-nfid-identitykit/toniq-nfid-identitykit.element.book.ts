import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqNfidIdentityKit} from './toniq-nfid-identitykit.element';

export const toniqNfidIdentityPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqNfidIdentityKit.tagName,
    elementExamplesCallback({defineExample}) {
        const exampleSetups: ReadonlyArray<{
            name: string;
            inputs: typeof ToniqNfidIdentityKit.inputsType;
        }> = [
            {
                name: 'danger',
                inputs: {
                    test: '',
                },
            },
        ];

        exampleSetups.forEach((exampleSetup) => {
            defineExample({
                title: exampleSetup.name,
                stateInitStatic: {},
                styles: css`
                    :host {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `,
                renderCallback() {
                    return html`
                        <${ToniqNfidIdentityKit.assign(
                            exampleSetup.inputs,
                        )}></${ToniqNfidIdentityKit}>
                    `;
                },
            });
        });
    },
});
