import {action} from '@storybook/addon-actions';
import {ArgTypes, ComponentMeta} from '@storybook/react';
import React from 'react';
import {allIconsByCategory, Rocket24Icon} from '../../icons';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqToggleButton} from '../react-components';
import {ToniqToggleButton as NativeToniqToggleButton} from './toniq-toggle-button.element';

const toggleButtonStoryControls = (<SpecificArgsGeneric extends ArgTypes>(
    input: SpecificArgsGeneric,
) => input)({
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
    iconControl: {
        name: '24px Icon',
        control: 'select',
        options: [
            'None',
            ...allIconsByCategory['core-24'].map((icon) => icon.iconName),
        ],
    },
    hostClass: {
        name: 'Host Class',
        control: 'select',
        options: [
            'None',
            'toniq-toggle-button-text-only',
        ],
    },
    active: {
        table: {
            disable: true,
        },
    },
    activeControl: {
        name: 'Active',
    },
    textControl: {
        name: 'Text',
        control: 'text',
    },
} as const);

const componentStoryMeta: ComponentMeta<typeof ToniqToggleButton> = {
    title: 'Elements/Toniq Toggle Button',
    component: ToniqToggleButton,
    argTypes: toggleButtonStoryControls,
    args: {
        textControl: 'Custom text here',
        activeControl: false,
        iconControl: 'None',
        hostClass: 'None',
    },
};

export default componentStoryMeta;

function handleChange(event: typeof NativeToniqToggleButton.events.activeChange) {
    action(event.type)(event);
}

export const mainStory = (
    controls: Record<keyof typeof toggleButtonStoryControls, string | boolean>,
) => {
    const customText = String(controls.textControl);
    const isActive = !!controls.activeControl;
    const customIcon = allIconsByCategory['core-24'].find(
        (icon) => icon.iconName === controls.iconControl,
    );

    function generateSection(active: boolean) {
        const title = `${active ? 'Active' : 'Inactive'} by default`;
        return (
            <>
                <h3
                    style={{
                        ...cssToReactStyleObject(toniqFontStyles.h3Font),
                    }}
                >
                    {title}
                </h3>
                <section style={{display: 'flex', gap: '8px'}}>
                    <ToniqToggleButton
                        onActiveChange={handleChange}
                        text="Toggle Me"
                        active={active}
                    />
                    <ToniqToggleButton
                        className="toniq-toggle-button-text-only"
                        onActiveChange={handleChange}
                        text="Text Only"
                        active={active}
                    />
                    <ToniqToggleButton
                        className="toniq-toggle-button-text-only"
                        onActiveChange={handleChange}
                        icon={Rocket24Icon}
                        text="With Icon"
                        active={active}
                    />
                </section>
            </>
        );
    }

    return (
        <>
            {generateSection(false)}
            {generateSection(true)}

            <h3
                style={{
                    ...cssToReactStyleObject(toniqFontStyles.h3Font),
                }}
            >
                Custom Inputs
            </h3>
            <ToniqToggleButton
                className={controls.hostClass}
                onActiveChange={handleChange}
                icon={customIcon}
                text={customText}
                active={isActive}
            />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
