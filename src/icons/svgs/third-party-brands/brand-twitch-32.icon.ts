import {toniqIconColors} from '../../../styles';
import {html, ToniqSvg} from '../../toniq-svg';

export const BrandTwitch32Icon = new ToniqSvg(
    'BrandTwitch32Icon',
    html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="${toniqIconColors.fill('#9146FF')}"
        >
            <path
                d="M2 5.71 7.71 0h21.72v16L19.14 26.29h-4.57L8.86 32v-5.71H2V5.7Zm20.57 13.72 4.57-4.57V2.29H8.86v17.14H14v4l4-4h4.57Z"
            />
            <path d="M21.43 6.29h2.29v6.86h-2.29zM15.14 6.29h2.29v6.86h-2.29z" />
        </svg>
    `,
);
