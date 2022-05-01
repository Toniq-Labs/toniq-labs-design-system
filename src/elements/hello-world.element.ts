import {defineElementEvent, defineFunctionalElement, html} from 'element-vir';

export const HelloWorld = defineFunctionalElement({
    tagName: 'toniq-hello-world',
    props: {
        greeting: 'Hello',
    },
    events: {
        specialThing: defineElementEvent<string>(),
    },
    initCallback: ({events, host, dispatch}) => {
        host.addEventListener('click', () => {
            dispatch(new events.specialThing('hello world was clicked'));
        });
    },
    renderCallback: ({props}) => {
        return html`
            ${props.greeting} world!
        `;
    },
});
