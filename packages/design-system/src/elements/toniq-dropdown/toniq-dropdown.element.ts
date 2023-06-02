import {assign, classMap, css, defineElementEvent, html} from 'element-vir';
import {testId} from '../../directives/test-id.directive';
import {ChevronDown24Icon, ToniqSvg} from '../../icons';
import {noUserSelect, toniqFontStyles} from '../../styles';
import {toniqDurations} from '../../styles/animation';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {toniqShadows} from '../../styles/shadows';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export interface ToniqDropdownOption<ValueType = any> {
    value: ValueType;
    label: string;
}

export enum ToniqDropdownDirectionEnum {
    Up = 'up',
    Down = 'down',
}

export const ToniqDropdown = defineToniqElement<{
    options: Readonly<ToniqDropdownOption[]>;
    selected?: undefined | Readonly<ToniqDropdownOption>;
    icon?: ToniqSvg | undefined;
    selectedLabelPrefix?: string | undefined;
    /** Choose which direction the dropdown will "drop" in. The default is down. */
    direction?: ToniqDropdownDirectionEnum;
    /**
     * Use this to force the open state of the dropdown. This is generally undesirable, and is
     * really only here for internal testing purposes.
     */
    forceOpenState?: boolean | undefined;
}>()({
    tagName: 'toniq-dropdown',
    stateInitStatic: {
        dropdownOpen: false,
    },
    events: {
        selectChange: defineElementEvent<ToniqDropdownOption>(),
        openChange: defineElementEvent<boolean>(),
    },
    styles: css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${toniqFontStyles.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${removeNativeFormStyles}
            border-radius: 8px;
            outline: none;
        }

        ${createFocusStyles({
            mainSelector: '.dropdown:focus:focus-visible:not(:active)',
            elementBorderSize: 0,
        })}

        .trigger-icon {
            transform: rotate(0);
            transition: ${toniqDurations.interaction} linear transform;
        }

        .trigger-icon {
            align-self: flex-start;
        }

        .dropdown.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: flex;
            flex-direction: column;
        }

        .dropdown.open:not(.reverse-direction),
        .dropdown.open:not(.reverse-direction) .select {
            border-radius: 8px 8px 0 0;
        }

        .dropdown.open.reverse-direction,
        .dropdown.open.reverse-direction .select {
            border-radius: 0 0 8px 8px;
        }

        .dropdown-trigger.dropdown-trigger {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        .select {
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px;
            padding-left: 16px;
            ${noUserSelect};
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)}
            ${toniqShadows.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
        }

        .selected-label-prefix {
            ${toniqFontStyles.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${noUserSelect};
        }

        .select-options .option.selected {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${toniqColors.accentTertiary.backgroundColor};
        }

        .dropdown:not(.reverse-direction) .select-options .option:last-of-type {
            border-radius: 0 0 8px 8px;
        }

        .dropdown.reverse-direction .select-options .option:first-of-type {
            border-radius: 8px 8px 0 0;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,
    initCallback: ({state, host, updateState}) => {
        function clickOutside(event: Event) {
            const dropdownTrigger = host.shadowRoot?.querySelector(
                'button.dropdown',
            ) as HTMLButtonElement;
            const withinBoundaries = event.composedPath().includes(dropdownTrigger);
            if (!withinBoundaries && state.dropdownOpen) {
                updateState({dropdownOpen: false});
            }
        }

        window.addEventListener('click', clickOutside);
    },
    renderCallback({dispatch, events, state, inputs, updateState}) {
        if (inputs.forceOpenState != undefined) {
            updateState({
                dropdownOpen: inputs.forceOpenState,
            });
        }

        const selectedOption = inputs.selected ? inputs.selected : inputs.options[0];

        function onSelectOption(item: ToniqDropdownOption) {
            updateState({dropdownOpen: false});
            dispatch(new events.openChange(false));
            dispatch(new events.selectChange(item));
        }

        const leadingIconTemplate = inputs.icon
            ? html`
                  <${ToniqIcon}
                      ${testId('rendered-input-icon')}
                      ${assign(ToniqIcon, {
                          icon: inputs.icon,
                      })}
                  ></${ToniqIcon}>
              `
            : '';

        const prefixTemplate = inputs.selectedLabelPrefix
            ? html`
                  <span class="selected-label-prefix">${inputs.selectedLabelPrefix}</span>
              `
            : '';

        return html`
            <button
                class=${classMap({
                    dropdown: true,
                    open: state.dropdownOpen,
                    'reverse-direction': inputs.direction === ToniqDropdownDirectionEnum.Up,
                })}
                @click=${() => {
                    const newOpenState = !state.dropdownOpen;
                    dispatch(new events.openChange(newOpenState));
                    updateState({dropdownOpen: newOpenState});
                }}
                role="listbox"
                aria-expanded=${state.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${leadingIconTemplate}
                    <span class="select-selected">${prefixTemplate} ${selectedOption?.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${ToniqIcon}
                            class="trigger-icon"
                            ${assign(ToniqIcon, {icon: ChevronDown24Icon})}
                        ></${ToniqIcon}>
                    </span>
                </div>
                <div class="select-options">
                    ${inputs.options.map(
                        (item) =>
                            html`
                                <span
                                    class="option ${item.value === selectedOption?.value
                                        ? 'selected'
                                        : ''}"
                                    @click=${(event: Event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        onSelectOption(item);
                                    }}
                                    role="option"
                                >
                                    ${item.label}
                                </span>
                            `,
                    )}
                </div>
            </button>
        `;
    },
});
