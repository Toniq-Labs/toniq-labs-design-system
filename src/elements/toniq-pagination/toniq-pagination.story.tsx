import {ArgTypes} from '@storybook/addons';
import {ComponentMeta} from '@storybook/react';
import React from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqPagination} from '../react-components';

const paginationStoryControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
    currentPage: {
        name: 'Current Page',
        control: 'number',
    },
    pageCount: {
        name: 'Page Count',
        control: 'number',
    },
    pageSize: {
        name: 'Page Size',
        control: 'number',
    },
} as const);

const paginationComponentStoryMeta: ComponentMeta<typeof ToniqPagination> = {
    title: 'Elements/Toniq Pagination',
    component: ToniqPagination,
    argTypes: paginationStoryControls as ArgTypes,
    // default args
    args: {
        currentPage: 1,
        pageCount: 10,
        pageSize: 7,
    },
};

export default paginationComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof paginationStoryControls, any>) => {
    return (
        <article>
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Toniq Pagination
            </h3>
            <ToniqPagination
                currentPage={controls.currentPage}
                pageCount={controls.pageCount}
                pageSize={controls.pageSize}
                onPageChange={handleEventAsAction}
                onCreated={handleEventAsAction}
                onPrevious={handleEventAsAction}
                onNext={handleEventAsAction}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Pagination';
