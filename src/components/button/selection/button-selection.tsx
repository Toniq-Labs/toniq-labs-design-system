import React, {FunctionComponent} from 'react';
import './button-selection.scoped.scss';

export type ButtonSelectionProps = Partial<{
    text: string;
}>;

export const ButtonSelection: FunctionComponent<ButtonSelectionProps | undefined> = (
    props?: ButtonSelectionProps,
) => {
    const text = props?.text ?? '';

    return <button className="button-selection">{text}</button>;
};
