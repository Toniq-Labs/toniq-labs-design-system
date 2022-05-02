import React, {FunctionComponent} from 'react';
import './button-primary.scoped.scss';

export type ButtonPrimaryProps = Partial<{
    text: string;
}>;

export const ButtonPrimary: FunctionComponent<ButtonPrimaryProps | undefined> = (
    props?: ButtonPrimaryProps,
) => {
    const text = props?.text ?? '';

    return <button className="button-primary">{text}</button>;
};
