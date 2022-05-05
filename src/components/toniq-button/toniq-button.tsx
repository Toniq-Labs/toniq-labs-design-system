import React, {FunctionComponent} from 'react';
import './toniq-button.scoped.scss';

export type ToniqButtonProps = Partial<{
    text: string;
    type: 'default' | 'selection';
}>;

export const ToniqButton: FunctionComponent<ToniqButtonProps | undefined> = (
    props?: ToniqButtonProps,
) => {
    const text = props?.text ?? '';
    const type = props?.type ?? 'default';

    return <button className={`toniq-button ${type}`}>{text}</button>;
};
