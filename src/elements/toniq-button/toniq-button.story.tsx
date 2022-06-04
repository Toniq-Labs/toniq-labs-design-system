import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import {capitalizeFirstLetter, getEnumTypedValues, isEnumValue} from 'augment-vir';
import React from 'react';
import {allIconsByCategory} from '../../icons';
import {ExternalLink24Icon} from '../../icons/svgs/core-24/external-link-24.icon';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqButton, ToniqIcon, ToniqToggleButton} from '../react-components';
import {ToniqButtonVariant} from './toniq-button.element';

const buttonStoryControls = (<SpecificArgsGeneric extends ArgTypes>(input: SpecificArgsGeneric) =>
    input)({
    text: {
        table: {
            disable: true,
        },
    },
    textInput: {
        name: 'Text',
        control: 'text',
    },
    variant: {
        name: 'Variant',
        control: 'select',
        options: getEnumTypedValues(ToniqButtonVariant),
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

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Button',
    component: ToniqButton,
    argTypes: buttonStoryControls,
    args: {
        textInput: 'Custom text here',
        iconName: undefined,
    },
};

export default componentStoryMeta;

function handleClick(event: Event) {
    action(event.type)(event);
}

export const mainStory = (controls: Record<keyof typeof buttonStoryControls, string>) => {
    function createVariantSection(variant: ToniqButtonVariant) {
        const title = capitalizeFirstLetter(variant);
        return (
            <>
                <h3
                    style={{
                        ...cssToReactStyleObject(toniqFontStyles.h3Font),
                    }}
                >
                    {title}
                </h3>
                <section style={{display: 'flex', gap: '16px'}}>
                    <ToniqButton variant={variant} onClick={handleClick}>
                        Default {title}
                    </ToniqButton>
                    <ToniqButton variant={variant} onClick={handleClick}>
                        <div>
                            <span>With HTML Child</span>
                        </div>
                    </ToniqButton>
                    <ToniqButton
                        title="with toniq-icon child"
                        variant={variant}
                        onClick={handleClick}
                    >
                        <ToniqIcon icon={ExternalLink24Icon} />
                    </ToniqButton>
                </section>
            </>
        );
    }

    const customVariant: ToniqButtonVariant = isEnumValue(controls.variant, ToniqButtonVariant)
        ? controls.variant
        : ToniqButtonVariant.Primary;

    const customIcon = allIconsByCategory['core-24'].find(
        (icon) => icon.iconName === controls.iconName,
    );
    const iconTemplate = customIcon ? <ToniqIcon icon={customIcon} /> : undefined;

    return (
        <article>
            {createVariantSection(ToniqButtonVariant.Primary)}
            {createVariantSection(ToniqButtonVariant.Secondary)}

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqButton variant={customVariant} onClick={handleClick} text={controls.textInput}>
                {iconTemplate}
            </ToniqButton>
        </article>
    );
};
mainStory.storyName = 'Toniq Button';
