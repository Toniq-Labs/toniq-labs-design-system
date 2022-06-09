import {css, defineElementEvent, html} from 'element-vir';
import {defineToniqElement} from '../define-toniq-element';

export const ToniqInput = defineToniqElement({
    tagName: 'toniq-input',
    props: {
        value: '',
        placeholder: '',
        label: '',
    },
    events: {
        valueChange: defineElementEvent<string>(),
    },
    styles: css``,
    renderCallback: ({props}) => {
        return html`
            <input value=${props.value} placeholder=${props.placeholder} />
        `;
    },
});
