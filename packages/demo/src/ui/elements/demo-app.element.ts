import {ToniqButton, ToniqInput, ToniqMiddleEllipsis} from '@toniq-labs/design-system';
import {assign, css, defineElementNoInputs, html, listen} from 'element-vir';

export const ToniqDemoApp = defineElementNoInputs({
    tagName: 'toniq-demo-app',
    styles: css`
        :host {
            display: block;
            padding: 64px;
        }
    `,
    stateInit: {
        inputDisabled: true,
    },
    renderCallback({state, updateState}) {
        return html`
            <h2>Toniq Labs Design System</h2>
            <p>WIP</p>
            <p>
                <a href="https://toniq-labs.github.io/toniq-labs-design-system-react">
                    old version here
                </a>
            </p>
            <p>
                <${ToniqButton} ${assign(ToniqButton, {text: 'test button'})}></${ToniqButton}>
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis, {
                        text: 'test button',
                        externalLink: 'https://toniq.io',
                    })}
                ></${ToniqMiddleEllipsis}>
                <${ToniqMiddleEllipsis}
                    ${assign(ToniqMiddleEllipsis, {text: 'test button', copyOnClick: true})}
                ></${ToniqMiddleEllipsis}>
                <${ToniqInput}
                    ${assign(ToniqInput, {
                        value: '',
                        placeholder: 'yo',
                        disabled: state.inputDisabled,
                    })}
                ></${ToniqInput}>
                <button
                    ${listen('click', () => {
                        updateState({inputDisabled: !state.inputDisabled});
                    })}
                >
                    Toggle input disabled
                </button>
            </p>
        `;
    },
});
