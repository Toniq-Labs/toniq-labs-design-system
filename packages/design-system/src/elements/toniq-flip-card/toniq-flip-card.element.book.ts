import {defineBookPage} from 'element-book';
import {assign, css, html, listen} from 'element-vir';
import {elementsBookPage} from '../../element-book/book-pages/elements.book';
import {ToniqFlipCard} from './toniq-flip-card.element';

export const toniqFlipCardBookPage = defineBookPage({
    title: ToniqFlipCard.tagName,
    parent: elementsBookPage,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'basic',
            styles: css`
                .front,
                .back {
                    padding: 32px;
                }
            `,
            stateInitStatic: {
                flipped: false,
            },
            renderCallback({state, updateState}) {
                return html`
                    <${ToniqFlipCard}
                        ${assign(ToniqFlipCard, {
                            flipped: state.flipped,
                        })}
                        ${listen(ToniqFlipCard.events.flippedChange, (event) => {
                            updateState({flipped: event.detail});
                        })}
                    >
                        <div class="front" slot="front">Hello there!</div>
                        <div class="back" slot="back">Bye there!</div>
                    </${ToniqFlipCard}>
                `;
            },
        });
    },
});
