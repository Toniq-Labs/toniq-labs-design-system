import {css} from 'element-vir';
import {noUserSelect} from './user-select';

export const toniqDisabledStyles = css`
    pointer-events: none;
    opacity: 0.3;
    ${noUserSelect};
`;
