import {html} from 'element-vir';
import {defineIcon} from 'vira';
import {toniqIconCssVars} from '../../../styles';

export const FrameBolt24Icon = defineIcon({
    name: 'FrameBolt24',
    svgTemplate: html`
        <svg
            width="24"
            height="24"
            fill=${toniqIconCssVars['toniq-icon-fill-color'].value}
            stroke=${toniqIconCssVars['toniq-icon-stroke-color'].value}
            stroke-width=${toniqIconCssVars['toniq-icon-stroke-width'].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15 8H15.01" />
            <path
                d="M13.5 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V12.5"
            />
            <path d="M3 15.9998L8 10.9998C8.928 10.1068 10.072 10.1068 11 10.9998L15 14.9998" />
            <path d="M14 13.9998L15 12.9998C15.669 12.3568 16.45 12.1768 17.18 12.4598" />
            <path d="M19 16L17 19H21L19 22" />

            <clipPath id="clip0_4115_27743">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </svg>
    `,
});
