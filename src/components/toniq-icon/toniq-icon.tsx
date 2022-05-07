import React, {FunctionComponent} from 'react';
import {ToniqSvg} from '../../icons/toniq-svg';

export type ToniqIconProps = Partial<{
    icon: ToniqSvg | undefined;
    title: string | undefined;
}>;

export const ToniqIcon: FunctionComponent<ToniqIconProps | undefined> = (
    props?: ToniqIconProps | undefined,
) => {
    const svgTemplateString: string = props?.icon?.svgString?.trim() ?? '';
    return <div title={props?.title} dangerouslySetInnerHTML={{__html: svgTemplateString}}></div>;
};
