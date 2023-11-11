import {
    DeclarativeElementHost,
    classMap,
    css,
    html,
    listen,
    onResize,
    unsafeCSS,
} from 'element-vir';
import {getScrollSnapPositions, scrollSnapToNext} from 'scroll-snap-api';
import {hideScrollbars} from 'vira';
import {ArrowLeft24Icon, ArrowRight24Icon} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

const templatesContainerClassName = 'templates-container';
const defaultCarouselCycleDelayMs = 4000;

export type ScrollDirection = 'left' | 'right';

export enum ToniqCarouselStyleEnum {
    Default = 'default',
    BannerStyle = 'banner-style',
}

export const ToniqCarousel = defineToniqElement<{
    /**
     * Templates for each item in the carousel. Can be anything: strings, numbers,
     * HTMLTemplateResult (recommended), or anything that has .toString().
     *
     * This is used instead of <slot> because this element needs to wrap each individual template.
     */
    templates: ReadonlyArray<unknown>;
    enableAutomaticCycling?: boolean;
    /** Number of milliseconds between each automatic cycling. Defaults to 4000. */
    cycleIntervalMs?: number;
    style?: ToniqCarouselStyleEnum | undefined;
}>()({
    tagName: 'toniq-carousel',
    cssVars: {
        'toniq-carousel-arrow-margin': '40px',
    },
    hostClasses: {
        'toniq-carousel-banner-style': ({inputs}) =>
            inputs.style === ToniqCarouselStyleEnum.BannerStyle,
    },
    stateInitStatic: {
        currentScrollPosition: {
            left: 0,
            right: Infinity,
        },
        scrollSnapPositions: [] as number[],
        rotationIntervalId: undefined as undefined | number,
        enableRotation: true,
    },
    styles: ({cssVars, hostClasses}) => css`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
        }

        ${hideScrollbars(`.${templatesContainerClassName}`)}

        .${unsafeCSS(templatesContainerClassName)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;
        }

        .template-wrapper {
            scroll-snap-align: center;
            /*
                Sometimes the edges clip just by a couple pixels, so account for that with the calc.
            */
            max-width: calc(100% - 2px);
        }

        .arrow {
            --background-degrees: 90deg;
            position: absolute;
            width: 100px;
            max-width: 20%;
            top: 0;
            bottom: 0;
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
            will-change: visibility;
        }

        ${hostClasses['toniq-carousel-banner-style'].selector} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${ToniqIcon} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${cssVars['toniq-carousel-arrow-margin'].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            visibility: hidden;
            pointer-events: none;
        }
    `,
    cleanupCallback: ({state}) => {
        window.clearInterval(state.rotationIntervalId);
    },
    renderCallback({inputs, state, updateState, host}) {
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
            <div>
                <div class="arrow left">
                    <${ToniqIcon.assign({
                        icon: ArrowLeft24Icon,
                    })}
                        class=${classMap({
                            hidden:
                                leftArrowHideZone == undefined
                                    ? true
                                    : state.currentScrollPosition.left <= leftArrowHideZone,
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
                    ${inputs.templates.map((template) => {
                        return html`
                            <div class="template-wrapper">${template}</div>
                        `;
                    })}
                </div>
                <div class="arrow right">
                    <${ToniqIcon.assign({
                        icon: ArrowRight24Icon,
                    })}
                        class=${classMap({
                            hidden:
                                rightArrowHideZone == undefined
                                    ? true
                                    : state.currentScrollPosition.left >= rightArrowHideZone,
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
