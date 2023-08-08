import {css} from 'element-vir';
import {noUserSelect} from 'vira';

export const toniqDisabledStyles = css`
    pointer-events: none;
    opacity: 0.3;
    ${noUserSelect};
`;
