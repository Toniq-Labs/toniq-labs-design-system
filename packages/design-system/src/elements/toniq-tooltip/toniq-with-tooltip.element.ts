import {
    Ref,
    TemplateResult,
    createRef,
    css,
    html,
    listen,
    onDomCreated,
    onResize,
    ref,
} from 'element-vir';
import {toniqDurations} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqTooltip} from './toniq-tooltip.element';

export const ToniqWithTooltip = defineToniqElement<{
    tooltipContent: string | TemplateResult;
    forceShow?: boolean | undefined;
}>()({
    tagName: 'toniq-with-tooltip',
    styles: css`
        :host {
            display: inline-block;
            position: relative;
        }

        .tooltip-wrapper {
            width: max-content;
            max-width: 200px;
            pointer-events: none;
        }

        [popover] {
            margin: 0;
            opacity: 0;
            transition: opacity ${toniqDurations.pretty};
        }

        [popover]:popover-open {
            opacity: 1;
        }
    `,
    stateInitStatic: {
        clickToggled: false,
        boundingClientRect: undefined as undefined | DOMRect,
        popOverEl: undefined as undefined | HTMLElement,
    },
    renderCallback({inputs, state, updateState}) {
        const popOverRef: Ref<HTMLElement> = createRef();

        function initiatePosition(element: Element) {
            if (!(element instanceof HTMLSlotElement)) {
                throw new Error('click event had no target');
            }

            updateState({
                boundingClientRect: element.assignedElements()[0]?.getBoundingClientRect(),
            });

            if (inputs.forceShow) {
                state.popOverEl?.showPopover();
            }
        }

        function updatePosition(event: MouseEvent) {
            const element = event.target;
            if (!(element instanceof HTMLElement)) {
                throw new Error('click event had no target');
            }

            updateState({
                boundingClientRect: element.getBoundingClientRect(),
            });
        }

        function hidePopover() {
            updateState({clickToggled: false});
            state.popOverEl?.hidePopover();
        }

        return html`
            <slot
                popovertarget="toniq-tooltip"
                ${onDomCreated((event) => {
                    initiatePosition(event);
                })}
                ${onResize((event) => {
                    initiatePosition(event.target);
                    updateState({
                        popOverEl: popOverRef.value,
                    });
                })}
                ${listen('click', (event) => {
                    updatePosition(event);
                    updateState({
                        clickToggled: true,
                    });
                    popOverRef.value?.showPopover();
                    setTimeout(() => {
                        hidePopover();
                    }, 3000);
                })}
                ${listen('mouseover', (event) => {
                    updatePosition(event);
                    popOverRef.value?.showPopover();
                })}
                ${listen('mouseleave', () => {
                    if (!state.clickToggled) {
                        hidePopover();
                    }
                })}
            ></slot>
            <${ToniqTooltip}
                ${ref(popOverRef)}
                id="toniq-tooltip"
                popover
                class="tooltip-wrapper"
                style=${css`
                    top: ${state.boundingClientRect ? state.boundingClientRect.bottom : 0}px;
                    left: ${state.boundingClientRect ? state.boundingClientRect.left : 0}px;
                `}
            >
                ${inputs.tooltipContent}
            </${ToniqTooltip}>
        `;
    },
});
