import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqMiddleEllipsis} from '../react-components';
import {ToniqMiddleEllipsis as NativeToniqMiddleEllipsis} from './toniq-middle-ellipsis.element';

const middleEllipsisControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
    text: {
        name: 'Text',
        control: 'text',
    },
    letterCount: {
        name: 'Letter Count',
        description: 'Number of letters allowed before the ellipsis.',
        control: {
            type: 'number',
            min: 1,
            step: 1,
        },
    },
    externalLink: {
        name: 'External Link',
        control: 'text',
    },
    copyOnClick: {
        name: 'Copy on Click',
        control: 'boolean',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqMiddleEllipsis> = {
    title: 'Elements/Toniq Middle Ellipsis',
    component: ToniqMiddleEllipsis,
    argTypes: middleEllipsisControls as ArgTypes,
    // default args
    args: {
        letterCount: 4,
        text: 'custom text',
        externalLink: '',
        copyOnClick: false,
    },
};

export default componentStoryMeta;

function handleCopied(event: typeof NativeToniqMiddleEllipsis.events.copied) {
    action(event.type)(event);
}

export const mainStory = (controls: Record<keyof typeof middleEllipsisControls, any>) => {
    const longText = 'long string inside of text';
    const shortText = 'short text';

    return (
        <article
            style={{
                fontFamily: 'sans-serif',
            }}
        >
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Long
            </h3>
            <span style={{marginRight: `16px`}}>"{longText}":</span>
            <ToniqMiddleEllipsis text={longText} letterCount={controls.letterCount} />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Short
            </h3>
            <span style={{marginRight: `16px`}}>"{shortText}":</span>
            <ToniqMiddleEllipsis text={shortText} letterCount={controls.letterCount} />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                External Link
            </h3>
            <ToniqMiddleEllipsis
                text={longText}
                letterCount={controls.letterCount}
                externalLink="https://entrepot.app"
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Copyable
            </h3>
            <ToniqMiddleEllipsis
                onCopied={handleCopied}
                text={'herp derp what is this madness'}
                letterCount={controls.letterCount}
                copyOnClick={true}
            />
            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom
            </h3>
            <ToniqMiddleEllipsis
                onCopied={handleCopied}
                text={controls.text}
                letterCount={controls.letterCount}
                externalLink={controls.externalLink}
                copyOnClick={controls.copyOnClick}
            />
        </article>
    );
};
mainStory.storyName = 'Toniq Middle Ellipsis';
