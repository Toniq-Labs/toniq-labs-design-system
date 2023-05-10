import {DeclarativeElementHost, assign, css, html, listen, onResize, unsafeCSS} from 'element-vir';
import {classMap} from 'lit/directives/class-map.js';
import {getScrollSnapPositions, scrollSnapToNext} from 'scroll-snap-api';
import {ArrowLeft24Icon, ArrowRight24Icon} from '../../icons';
import {applyBackgroundAndForeground, toniqColors, toniqDurations} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

const templatesContainerClassName = 'templates-container';
const defaultCarouselCycleDelayMs = 4000;

export type ScrollDirection = 'left' | 'right';

export const ToniqCarousel = defineToniqElement<{
    /**
     * Templates for each item in the carousel. Can be anything, strings, numbers,
     * HTMLTemplateResult (recommended), or anything that has .toString().
     */
    templates: ReadonlyArray<unknown>;
    enableAutomaticCycling?: boolean;
    /** Number of milliseconds between each automatic cycling. Defaults to 4000. */
    cycleIntervalMs?: number;
}>()({
    tagName: 'toniq-carousel',
    cssVars: {
        'arrow-margin': '40px',
    },
    hostClasses: {
        'banner-style': false,
    },
    stateInit: {
        currentScrollPosition: {
            left: 0,
            right: Infinity,
        },
        /** This is used to calculate how to hide the scrollbar. */
        templatesWrapperHeight: 0,
        scrollSnapPositions: [] as number[],
        rotationIntervalId: undefined as undefined | number,
        enableRotation: true,
    },
    styles: ({cssVarValues, hostClassSelectors}) => css`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        .${unsafeCSS(templatesContainerClassName)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }

        .${unsafeCSS(templatesContainerClassName)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;

            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        .template-wrapper {
            scroll-snap-align: center;
        }

        .arrow {
            --background-degrees: 90deg;
            position: sticky;
            width: 100px;
            max-width: 20%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                white 0%,
                rgba(255, 255, 255, 0.6) 30%,
                rgba(255, 255, 255, 0) 100%
            );
        }

        ${hostClassSelectors['banner-style']} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow.right::after {
            left: unset;
            right: 0;
        }

        .arrow ${ToniqIcon} {
            transition: ${toniqDurations.pretty};
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${cssVarValues['arrow-margin']};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
        }

        .hidden {
            /*
                Don't set opacity: 0 here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,
    cleanupCallback: ({state}) => {
        window.clearInterval(state.rotationIntervalId);
    },
    renderCallback: ({inputs, state, updateState, host}) => {
        if (inputs.enableAutomaticCycling && state.rotationIntervalId == undefined) {
            updateState({
                rotationIntervalId: window.setInterval(() => {
                    rotateCarousel({
                        host,
                        direction: 'right',
                        allowWrapping: true,
                        blockIfHovering: true,
                    });
                }, inputs.cycleIntervalMs || defaultCarouselCycleDelayMs),
            });
        } else if (!inputs.enableAutomaticCycling && state.rotationIntervalId != undefined) {
            window.clearInterval(state.rotationIntervalId);
            updateState({
                rotationIntervalId: undefined,
            });
        }

        const leftArrowHideZone = getMidSnapPosition(state.scrollSnapPositions, 0);
        const rightArrowHideZone = getMidSnapPosition(state.scrollSnapPositions, -1);

        return html`
            <div
                ${onResize(() => {
                    updateState({
                        scrollSnapPositions: getScrollSnapPositions(getScrollContainer(host)).x,
                    });
                })}
                class=${templatesContainerClassName}
                ${listen('scroll', async (event) => {
                    const element = event.target;

                    if (!(element instanceof HTMLElement)) {
                        throw new Error('scroll event had no target');
                    }

                    const currentScrollPosition = {
                        left: element.scrollLeft,
                        right: element.scrollWidth - element.scrollLeft - element.clientWidth,
                    };

                    updateState({
                        currentScrollPosition,
                    });
                })}
            >
                <div class="arrow left">
                    <${ToniqIcon}
                        class=${classMap({
                            hidden: state.currentScrollPosition.left <= (leftArrowHideZone ?? 100),
                        })}
                        ${assign(ToniqIcon, {
                            icon: ArrowLeft24Icon,
                        })}
                        ${listen('click', () => {
                            rotateCarousel({
                                allowWrapping: false,
                                blockIfHovering: false,
                                direction: 'left',
                                host,
                            });
                        })}
                    ></${ToniqIcon}>
                </div>
                ${inputs.templates.map((template) => {
                    return html`
                        <div class="template-wrapper">${template}</div>
                    `;
                })}
                <div class="arrow right">
                    <${ToniqIcon}
                        class=${classMap({
                            hidden:
                                rightArrowHideZone == undefined
                                    ? state.currentScrollPosition.right <= 100
                                    : state.currentScrollPosition.left >= rightArrowHideZone,
                        })}
                        ${assign(ToniqIcon, {
                            icon: ArrowRight24Icon,
                        })}
                        ${listen('click', () => {
                            rotateCarousel({
                                allowWrapping: false,
                                blockIfHovering: false,
                                direction: 'right',
                                host,
                            });
                        })}
                    ></${ToniqIcon}>
                </div>
            </div>
        `;
    },
});

function getMidSnapPosition(positions: number[], positionToRead: number): number | undefined {
    const increment = positionToRead >= 0 ? 1 : -1;
    const indexToRead: number =
        positionToRead < 0 ? positions.length + positionToRead : positionToRead;
    const nextIndex = indexToRead + increment;

    const start = positions[indexToRead];
    const end = positions[nextIndex];

    if (start == undefined || end == undefined) {
        return undefined;
    }

    return (start + end) / 2 + increment * 20;
}

function getScrollContainer(host: DeclarativeElementHost) {
    const scrollContainer = host.shadowRoot.querySelector(`.${templatesContainerClassName}`);
    if (!(scrollContainer instanceof HTMLElement)) {
        throw new Error(`Failed to find scroll container.`);
    }
    return scrollContainer;
}

function rotateCarousel({
    host,
    direction,
    allowWrapping,
    blockIfHovering,
}: {
    host: DeclarativeElementHost;
    direction: ScrollDirection;
    allowWrapping: boolean;
    blockIfHovering: boolean;
}) {
    // don't rotate if the user is mousing over the carousel
    if (blockIfHovering && host.matches(':hover')) {
        return;
    }

    const scrollContainer = getScrollContainer(host);
    const containerWidth = scrollContainer.clientWidth;
    const snapPositions = getScrollSnapPositions(getScrollContainer(host)).x;
    const firstScrollPosition = snapPositions[0] ?? 0;
    const lastScrollPosition = snapPositions.slice(-1).pop() ?? containerWidth;

    const isReadyToWrapBackToFarLeft =
        scrollContainer.scrollLeft >=
        lastScrollPosition -
            // small buffer
            10;
    const isReadyToWrapBackToFarRight =
        scrollContainer.scrollLeft <=
        firstScrollPosition +
            // small buffer
            10;

    // wrap back around from right to left
    if (direction === 'right' && isReadyToWrapBackToFarLeft) {
        if (allowWrapping) {
            scrollContainer.scrollTo({
                behavior: 'smooth',
                left: firstScrollPosition,
            });
        }
    }
    // wrap back around from left to right
    else if (direction === 'left' && isReadyToWrapBackToFarRight) {
        if (allowWrapping) {
            scrollContainer.scrollTo({
                behavior: 'smooth',
                left: lastScrollPosition,
            });
        }
    }
    // normal movement
    else {
        const arrowWidth = calculateArrowWidth(host, direction);

        const currentPosition = getSnapPositionClosestTo(
            scrollContainer.scrollLeft,
            snapPositions,
            false,
        );
        const directionFactor = direction === 'right' ? 1 : -1;
        const nextPositionOffset = (scrollContainer.clientWidth - arrowWidth * 3) * directionFactor;

        const nextPosition = getSnapPositionClosestTo(
            (currentPosition || 0) + nextPositionOffset,
            snapPositions,
            true,
        );

        if (direction === 'right' && nextPosition > currentPosition) {
            scrollContainer.scrollTo({behavior: 'smooth', left: nextPosition});
        } else if (direction === 'left' && nextPosition < currentPosition) {
            scrollContainer.scrollTo({behavior: 'smooth', left: nextPosition});
        } else {
            scrollSnapToNext(scrollContainer, direction);
        }
    }
}

function calculateArrowWidth(host: DeclarativeElementHost, direction: ScrollDirection) {
    const arrowSelector = `.arrow.${direction}`;

    const relevantArrowElement = host.shadowRoot.querySelector(arrowSelector);

    if (!relevantArrowElement) {
        throw new Error('Failed to find arrow element for calculating its size.');
    }

    return relevantArrowElement.clientWidth;
}

function getSnapPositionClosestTo(
    closestToThis: number,
    snapPositions: ReadonlyArray<number>,
    roundDown: boolean,
): number {
    const closestPosition = snapPositions.reduce((closest, position) => {
        const positionDistance = Math.abs(closestToThis - position);
        const closestDistance = Math.abs(closestToThis - closest);
        if (positionDistance < closestDistance) {
            if (roundDown ? position <= closestToThis : true) {
                return position;
            }
        }
        return closest;
    }, Infinity);

    return closestPosition;
}
