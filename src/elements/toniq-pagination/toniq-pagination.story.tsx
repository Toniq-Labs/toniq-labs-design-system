import {ArgTypes} from '@storybook/addons';
import {ComponentMeta} from '@storybook/react';
import React, {useState} from 'react';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqPagination} from '../react-components';

const paginationStoryControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
    ...standardControls,
    currentPage: {
        name: 'Current Page',
        control: 'number',
    },
    pageCount: {
        name: 'Page Count',
        control: 'number',
    },
    pagesShown: {
        name: 'Pages Shown',
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
        pagesShown: 7,
    },
};

export default paginationComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof paginationStoryControls, any>) => {
    const [
        currentPage,
        updateCurrentPage,
    ] = useState(controls.currentPage);

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
                currentPage={currentPage}
                pageCount={controls.pageCount}
                pagesShown={controls.pagesShown}
                onPageChange={(event) => {
                    updateCurrentPage(event.detail);
                    handleEventAsAction(event);
                }}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Pagination';
