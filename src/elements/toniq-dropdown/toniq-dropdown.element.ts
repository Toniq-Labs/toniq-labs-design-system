import {assign, css, defineElementEvent, html} from 'element-vir';
import {ReactiveController, ReactiveControllerHost} from 'lit';
import {ChevronDown24Icon} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export interface ToniqDropdownSelect {
    value: string | number | undefined;
    label: string | undefined;
}

export class ToniqDropdownController implements ReactiveController {
    host: ReactiveControllerHost;
    dropDownEl: HTMLElement;

    constructor(host: ReactiveControllerHost, dropDownEl: HTMLElement) {
        (this.host = host).addController(this);
        this.dropDownEl = dropDownEl;
    }

    clickOutside(event: Event) {
        const withinBoundaries = event.composedPath().includes(this.dropDownEl);
        if (!withinBoundaries && this.dropDownEl && this.dropDownEl.classList.contains('open')) {
            this.dropDownEl.classList.remove('open');
        }
    }

    hostConnected() {
        window.addEventListener('click', this.clickOutside.bind(this));
    }

    hostDisconnected() {
        window.removeEventListener('click', this.clickOutside.bind(this));
    }
}

export const ToniqDropdown = defineToniqElement({
    tagName: 'toniq-dropdown',
    props: {
        list: [] as undefined | ToniqDropdownSelect[],
        select: {} as undefined | ToniqDropdownSelect,
    },
    events: {
        selectChange: defineElementEvent<object>(),
    },
    styles: css`
        :host {
            font-family: var(--toniq-font, 'Rubik');
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
        }

        .dropdown {
            width: 288px;
            height: 48px;
            position: relative;
        }

        toniq-icon {
            -moz-transition: all 0.2s linear;
            -webkit-transition: all 0.2s linear;
            transition: all 0.2s linear;
        }

        .dropdown.open toniq-icon {
            -moz-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: grid;
        }

        .select {
            display: flex;
            justify-content: space-between;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px 12px 12px 16px;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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
            filter: drop-shadow(0px 16px 16px rgba(39, 170, 243, 0.16));
        }

        .select-options .option {
            padding: 16px 16px 8px 16px;
            cursor: pointer;
            user-select: none;
        }

        .select-options .option.selected,
        .option:hover {
            ${applyBackgroundAndForeground(toniqColors.accentPrimary)}
        }

        .select-options .option:last-child {
            padding: 16px 16px 16px 16px;
            border-radius: 0px 0px 8px 8px;
        }
    `,
    renderCallback: ({dispatch, events, props, setProps, host}) => {
        const defaultSelectProps: Required<ToniqDropdownSelect> = {
            value: props.list?.length ? props.list[0]?.value : '',
            label: props.list?.length ? props.list[0]?.label : '',
        };

        const list = props.list ?? [];
        const select =
            typeof props.select === 'object' && Object.keys(props.select).length
                ? props.select
                : defaultSelectProps;
        let dropDownEl: HTMLElement;

        // Get dropdown element after rendering
        setTimeout(() => {
            dropDownEl = host.shadowRoot?.querySelector('div.dropdown') as HTMLElement;
            new ToniqDropdownController(host, dropDownEl);
        }, 500);

        const onToggleDropdown = () => {
            if (dropDownEl) {
                if (dropDownEl.classList.contains('open')) {
                    dropDownEl.classList.remove('open');
                } else {
                    dropDownEl.classList.add('open');
                }
            }
        };

        const onSelectOption = (event: Event, item: ToniqDropdownSelect) => {
            setProps({select: item});
            dispatch(new events.selectChange({event, item}));

            // Close dropdown
            if (dropDownEl && dropDownEl.classList.contains('open')) {
                dropDownEl.classList.remove('open');
            }
        };

        return html`
            <div class="dropdown" @click=${(event: Event) => {
                event.preventDefault();
                onToggleDropdown();
            }}>
                <div class="select">
                    <span class="select-selected">${select.label}</span>
                    <${ToniqIcon} ${assign(ToniqIcon.props.icon, ChevronDown24Icon)}></${ToniqIcon}>
                </div>
                <div class="select-options">
                    ${list.map(
                        (item) =>
                            html`
                                <span
                                    class=${`option ${
                                        item.value === select.value ? 'selected' : ''
                                    }`}
                                    @click=${(event: Event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        onSelectOption(event, item);
                                    }}
                                >
                                    ${item.label}
                                </span>
                            `,
                    )}
                </div>
            </div>
        `;
    },
});
