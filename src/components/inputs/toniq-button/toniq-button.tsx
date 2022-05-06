import React, {FunctionComponent} from 'react';
import './toniq-button.scoped.scss';

type CommonProps = Partial<{
    text: string;
}>;

type TypesProps =
    | {
          type?: 'toggle';
          variant?: never;
      }
    | {
          type?: 'default';
          variant?: 'primary' | 'secondary';
      };

export type ToniqButtonProps = CommonProps & TypesProps;

export const ToniqButton: FunctionComponent<ToniqButtonProps | undefined> = (
    props?: ToniqButtonProps,
) => {
    const text = props?.text ?? '';
    const type = props?.type ?? 'default';
    const variant = props?.variant ?? '';

    return <button className={`toniq-button ${type} ${variant}`}>{text}</button>;
};
