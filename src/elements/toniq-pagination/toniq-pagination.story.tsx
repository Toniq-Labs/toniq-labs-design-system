import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqPagination} from '../react-components';

const paginationComponentStoryMeta: ComponentMeta<typeof ToniqPagination> = {
    title: 'Elements/Toniq Pagination',
    component: ToniqPagination,
};

export default paginationComponentStoryMeta;

export const mainStory = () => {
    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Toniq Pagination
            </h3>
            <ToniqPagination currentPage={2}>Content Here</ToniqPagination>
        </article>
    );
};
mainStory.storyName = 'Toniq Pagination';
