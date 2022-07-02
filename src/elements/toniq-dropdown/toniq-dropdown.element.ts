import {assign, css, defineElementEvent, html} from 'element-vir';
import {ChevronDown24Icon} from '../../icons';
import {interactionDuration, noUserSelect, toniqFontStyles} from '../../styles';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {removeNativeButtonStyles} from '../../styles/native-styles';
import {toniqShadows} from '../../styles/shadows';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

declare global {
    interface Window {
        dropdownListenerAdded: boolean;
    }
}
window.dropdownListenerAdded = window.dropdownListenerAdded || false;

export interface ToniqDropdownOption {
    value: unknown;
    label: string;
}

export const ToniqDropdown = defineToniqElement({
    tagName: 'toniq-dropdown',
    props: {
        options: [] as Readonly<ToniqDropdownOption[]>,
        selected: undefined as undefined | Readonly<ToniqDropdownOption>,
        dropdownOpen: false,
    },
    events: {
        selectChange: defineElementEvent<ToniqDropdownOption>(),
    },
    styles: css`
        :host {
            ${toniqFontStyles.boldParagraphFont};
        }

        .dropdown {
            width: 288px;
            height: 48px;
            position: relative;
            ${removeNativeButtonStyles}
            border-radius: 8px;
        }

        ${ToniqIcon} {
            transition: ${interactionDuration} linear;
        }

        .dropdown.open ${ToniqIcon} {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: grid;
        }

        .dropdown.open,
        .dropdown.open .select {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        .select {
            display: flex;
            justify-content: space-between;
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
            ${applyBackgroundAndForeground(toniqColors.accentSecondary)}
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }
    `,
    initCallback: ({props, host, setProps}) => {
        if (!window.dropdownListenerAdded) {
            window.addEventListener('click', clickOutside);
            window.dropdownListenerAdded = true;
        }

        function clickOutside(event: Event) {
            const dropDownEl = host.shadowRoot?.querySelector('button.dropdown') as HTMLElement;
            const withinBoundaries = event.composedPath().includes(dropDownEl);
            if (!withinBoundaries && props.dropdownOpen) {
                setProps({dropdownOpen: false});
            }
        }
    },
    renderCallback: ({dispatch, events, props, setProps}) => {
        const selectedOption = props.selected ? props.selected : props.options[0];

        function onToggleDropdown() {
            setProps({dropdownOpen: !props.dropdownOpen});
        }

        function onSelectOption(event: Event, item: ToniqDropdownOption) {
            setProps({selected: item, dropdownOpen: false});
            dispatch(new events.selectChange(item));
        }

        return html`
            <button class="dropdown ${props.dropdownOpen ? 'open' : ''}"
                @click=${() => onToggleDropdown()}
                role="listbox"
                aria-expanded=${props.dropdownOpen}>
                <div class="select">
                    <span class="select-selected">${selectedOption?.label}</span>
                    <${ToniqIcon} ${assign(ToniqIcon.props.icon, ChevronDown24Icon)}></${ToniqIcon}>
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
                                        onSelectOption(event, item);
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
