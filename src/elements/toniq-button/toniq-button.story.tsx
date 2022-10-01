import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory} from '../../icons';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {standardControls} from '../../storybook-helpers/standard-controls';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqButton, ToniqIcon} from '../react-components';

const buttonStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    ...standardControls,
    text: {
        table: {
            disable: true,
        },
    },
    icon: {
        table: {
            disable: true,
        },
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
    hostClass: {
        name: 'Host Class',
        control: 'select',
        options: [
            'None',
            'toniq-button-secondary',
            'toniq-button-outline',
        ],
    },
    iconName: {
        name: '24px Icon',
        control: 'select',
        options: [
            'None',
            ...allIconsByCategory['core-24'].map((icon) => icon.iconName),
        ],
    },
} as const);

const buttonComponentStoryMeta: ComponentMeta<typeof ToniqButton> = {
    title: 'Elements/Toniq Button',
    component: ToniqButton,
    argTypes: buttonStoryControls,
    args: {
        textInput: 'Custom text here',
        iconName: 'None',
        hostClass: 'None',
    },
};

export default buttonComponentStoryMeta;

export const mainStory = (controls: Record<keyof typeof buttonStoryControls, string>) => {
    function createVariantSection(hostClass: string) {
        const title = hostClass || 'Default';

        return (
            <>
                <h3
                    style={{
                        ...cssToReactStyleObject(toniqFontStyles.h3Font),
                    }}
                >
                    {title}
                </h3>
                <section style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                    <ToniqButton
                        className={hostClass}
                        text={`Default ${title}`}
                        onClick={handleEventAsAction}
                    ></ToniqButton>
                    <ToniqButton
                        className={hostClass}
                        text="Icon and text inputs"
                        icon={ExternalLink24Icon}
                        onClick={handleEventAsAction}
                    ></ToniqButton>
                    <ToniqButton
                        className={hostClass}
                        title="Just icon input"
                        icon={ExternalLink24Icon}
                        onClick={handleEventAsAction}
                    ></ToniqButton>
                    <ToniqButton className={hostClass} onClick={handleEventAsAction}>
                        <div>
                            <span>With HTML Child</span>
                        </div>
                    </ToniqButton>
                    <ToniqButton
                        title="with toniq-icon child"
                        className={hostClass}
                        onClick={handleEventAsAction}
                    >
                        <ToniqIcon icon={ExternalLink24Icon} />
                    </ToniqButton>
                    <ToniqButton
                        text="with changed size"
                        style={{width: '250px', height: '75px'}}
                        className={hostClass}
                        onClick={handleEventAsAction}
                    ></ToniqButton>
                </section>
            </>
        );
    }

    const customIcon = allIconsByCategory['core-24'].find(
        (icon) => icon.iconName === controls.iconName,
    );
    const iconTemplate = customIcon ? <ToniqIcon icon={customIcon} /> : undefined;

    return (
        <article>
            {createVariantSection('')}
            {createVariantSection('toniq-button-secondary')}
            {createVariantSection('toniq-button-outline')}

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqButton
                className={controls.hostClass}
                onClick={handleEventAsAction}
                text={controls.textInput}
            >
                {iconTemplate}
            </ToniqButton>
        </article>
    );
};
mainStory.storyName = 'Toniq Button';
