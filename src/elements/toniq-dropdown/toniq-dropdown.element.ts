import {assign, css, html} from 'element-vir';
import {ChevronDown24Icon} from '../../icons';
import {applyBackgroundAndForeground, toniqColors} from '../../styles/colors';
import {defineToniqElement} from '../define-toniq-element';
import {ToniqIcon} from '../toniq-icon/toniq-icon.element';

export interface ToniqDropdownValue {
    value: string;
}

export const ToniqDropdown = defineToniqElement({
    tagName: 'toniq-dropdown',
    props: {
        text: '',
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
    renderCallback: ({props}) => {
        const onToggleDropdown = (event: Event) => {
            const selectEL: HTMLElement = event.target as HTMLElement;
            const dropDownEl: HTMLElement = selectEL.closest('div.dropdown') as HTMLElement;
            if (dropDownEl) {
                if (dropDownEl.classList.contains('open')) {
                    dropDownEl.classList.remove('open');
                } else {
                    dropDownEl.classList.add('open');
                }
            }
        };

        const onSelectOption = (event: Event) => {
            console.log(event);
        };

        return html`
            <div class="dropdown" @click=${(event: Event) => {
                event.preventDefault();
                onToggleDropdown(event);
            }}>
                <div class="select">
                    <span class="select-selected">Option 1</span>
                    <${ToniqIcon} ${assign(ToniqIcon.props.icon, ChevronDown24Icon)}></${ToniqIcon}>
                </div>
                <div class="select-options" @click=${(event: Event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onSelectOption(event);
                }}>
                    <span class="option">Option 1</span>
                    <span class="option">Option 2</span>
                    <span class="option">Option 3</span>
                </div>
            </div>
        `;
    },
});
