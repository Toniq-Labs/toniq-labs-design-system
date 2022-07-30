import {assign, css, defineElementEvent, html} from 'element-vir';
import {ChevronDown24Icon, ToniqSvg} from '../../icons';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {createFocusStyles} from '../../styles/focus';
import {removeNativeFormStyles} from '../../styles/native-styles';
import {toniqShadows} from '../../styles/shadows';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export interface ToniqDropdownOption<ValueType = unknown> {
    value: ValueType;
    label: string;
}

export const ToniqDropdown = defineToniqElement({
    tagName: 'toniq-dropdown',
    props: {
        options: [] as Readonly<ToniqDropdownOption[]>,
        selected: undefined as undefined | Readonly<ToniqDropdownOption>,
        icon: undefined as ToniqSvg | undefined,
        selectedLabelPrefix: '',
        dropdownOpen: false,
    },
    events: {
        selectChange: defineElementEvent<ToniqDropdownOption>(),
    },
    styles: css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            ${toniqFontStyles.boldParagraphFont};
        }

        .dropdown {
            width: 288px;
            height: 48px;
            position: relative;
            ${removeNativeFormStyles}
            border-radius: 8px;
            outline: none;
        }

        ${createFocusStyles('.dropdown:focus', 0)}

        ${ToniqIcon} {
            transition: ${interactionDuration} linear;
        }

        .dropdown.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: flex;
            flex-direction: column;
            will-change: filter;
        }

        .dropdown.open,
        .dropdown.open .select {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        .select {
            display: flex;
            gap: 8px;
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
            border-radius: 8px;
            ${applyBackgroundAndForeground(toniqColors.pagePrimary)}
            ${toniqShadows.popupShadow};
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

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,
    initCallback: ({props, host, setProps}) => {
        function clickOutside(event: Event) {
            const dropdownTrigger = host.shadowRoot?.querySelector(
                'button.dropdown',
            ) as HTMLButtonElement;
            const withinBoundaries = event.composedPath().includes(dropdownTrigger);
            if (!withinBoundaries && props.dropdownOpen) {
                setProps({dropdownOpen: false});
            }
        }

        window.addEventListener('click', clickOutside);
    },
    renderCallback: ({dispatch, events, props, setProps}) => {
        const selectedOption = props.selected ? props.selected : props.options[0];

        function onToggleDropdown() {
            setProps({dropdownOpen: !props.dropdownOpen});
        }

        function onSelectOption(item: ToniqDropdownOption) {
            setProps({dropdownOpen: false});
            dispatch(new events.selectChange(item));
        }

        const leadingIconTemplate = props.icon
            ? html`
                <${ToniqIcon}
                    data-test-id="rendered-input-icon"
                    ${assign(ToniqIcon.props.icon, props.icon)}
                ></${ToniqIcon}>`
            : '';

        const prefixTemplate = props.selectedLabelPrefix
            ? html`
                  <span class="selected-label-prefix">${props.selectedLabelPrefix}</span>
              `
            : '';

        return html`
            <button class="dropdown ${props.dropdownOpen ? 'open' : ''}"
                @click=${() => onToggleDropdown()}
                role="listbox"
                aria-expanded=${props.dropdownOpen}>
                <div class="select">
                    ${leadingIconTemplate}
                    <span class="select-selected">
                        ${prefixTemplate}
                        ${selectedOption?.label}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${ToniqIcon}
                            class="trigger-icon"
                            ${assign(ToniqIcon.props.icon, ChevronDown24Icon)}
                        ></${ToniqIcon}>
                    </span>
                </div>
                <div class="select-options">
                    ${props.options.map(
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
