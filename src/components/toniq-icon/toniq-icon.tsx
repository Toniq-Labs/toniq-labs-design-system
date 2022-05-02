import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {ToniqSvg} from '../../icons/toniq-svg';

export type ToniqIconProps = Partial<{
    icon: ToniqSvg | undefined;
}>;

const StyledToniqIcon = styled.div<ToniqIconProps>``;

export const ToniqIcon: FunctionComponent<ToniqIconProps | undefined> = (
    props?: ToniqIconProps | undefined,
) => {
    const svgTemplateString: string = props?.icon?.svgString?.trim() ?? '';
    return (
        <StyledToniqIcon dangerouslySetInnerHTML={{__html: svgTemplateString}}></StyledToniqIcon>
    );
};
