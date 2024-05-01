import {defineBookPage} from 'element-book';
import {HtmlInterpolation, css, html} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqAlert, ToniqAlertVariantEnum} from './toniq-alert.element';

export const toniqAlertPage = defineBookPage({
    parent: elementsBookPage,
    title: ToniqAlert.tagName,
    elementExamplesCallback({defineExample}) {
        const exampleSetups: ReadonlyArray<{
            name: string;
            inputs: typeof ToniqAlert.inputsType;
            slot: HtmlInterpolation | string;
        }> = [
            {
                name: 'danger',
                inputs: {
                    variant: ToniqAlertVariantEnum.Danger,
                },
                //prettier-ignore
                slot: html`<strong>Alert!</strong>This is an alert, Please be very careful!`,
            },
            {
                name: 'warning',
                inputs: {
                    variant: ToniqAlertVariantEnum.Warning,
                },
                slot: 'This is a warning, proceed with caution 🚧',
            },

            {
                name: 'success',
                inputs: {
                    variant: ToniqAlertVariantEnum.Success,
                },
                slot: 'You have successfully completed your task!',
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
                        <${ToniqAlert.assign(exampleSetup.inputs)}>
                            ${exampleSetup.slot}
                        </${ToniqAlert}>
                    `;
                },
            });
        });
    },
});
