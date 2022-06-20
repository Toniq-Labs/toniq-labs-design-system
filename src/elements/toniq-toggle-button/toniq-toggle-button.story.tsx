import {ArgTypes, ComponentMeta} from '@storybook/react';
import React, {useReducer} from 'react';
import {allIconsByCategory, Rocket24Icon} from '../../icons';
import {handleEventAsAction} from '../../storybook-helpers/actions';
import {toniqFontStyles} from '../../styles';
import {cssToReactStyleObject} from '../../styles/css-to-react';
import {ToniqToggleButton} from '../react-components';

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
        iconControl: 'None',
        hostClass: 'None',
    },
};

export default componentStoryMeta;

const toggleButtonStatesInit = {
    true: {
        default: true,
        textOnly: true,
        withIcon: true,
    },
    false: {
        default: false,
        textOnly: false,
        withIcon: false,
    },
    custom: false,
} as const;

type BooleanSubKeys = keyof typeof toggleButtonStatesInit['true'];

type ToggleButtonStoryState = Readonly<{
    [P in keyof typeof toggleButtonStatesInit]: typeof toggleButtonStatesInit[P] extends object
        ? Record<BooleanSubKeys, boolean>
        : boolean;
}>;

export const mainStory = (
    controls: Record<keyof typeof toggleButtonStoryControls, string | boolean>,
) => {
    const customText = String(controls.textControl);
    const customIcon = allIconsByCategory['core-24'].find(
        (icon) => icon.iconName === controls.iconControl,
    );

    const [
        toggleButtonStates,
        updateToggleButtonStates,
    ] = useReducer(
        (
            state: ToggleButtonStoryState,
            {
                key,
                subKey,
            }: {
                key: keyof ToggleButtonStoryState;
                subKey: BooleanSubKeys | undefined;
            },
        ): ToggleButtonStoryState => {
            if (key === 'custom') {
                return {...state, custom: !state.custom};
            } else if (subKey !== undefined) {
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [subKey]: !state[key][subKey],
                    },
                };
            } else {
                throw new Error(`Key was not custom but subKey was not defined.`);
            }
        },
        toggleButtonStatesInit,
    );

    function generateSection(active: boolean) {
        const title = `Initially ${active ? 'Active' : 'Inactive'}`;
        const stateProp = String(active) as 'true' | 'false';
        const states = toggleButtonStates[stateProp];

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
                        onClick={(event: MouseEvent) => {
                            updateToggleButtonStates({
                                key: stateProp,
                                subKey: 'default',
                            });
                            handleEventAsAction(event);
                        }}
                        text="Toggle Me"
                        active={states.default}
                    />
                    <ToniqToggleButton
                        className="toniq-toggle-button-text-only"
                        onClick={(event: MouseEvent) => {
                            updateToggleButtonStates({
                                key: stateProp,
                                subKey: 'textOnly',
                            });
                            handleEventAsAction(event);
                        }}
                        text="Text Only"
                        active={states.textOnly}
                    />
                    <ToniqToggleButton
                        className="toniq-toggle-button-text-only"
                        onClick={(event: MouseEvent) => {
                            updateToggleButtonStates({
                                key: stateProp,
                                subKey: 'withIcon',
                            });
                            handleEventAsAction(event);
                        }}
                        icon={Rocket24Icon}
                        text="With Icon"
                        active={states.withIcon}
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
                onClick={(event: MouseEvent) => {
                    updateToggleButtonStates({
                        key: 'custom',
                        subKey: undefined,
                    });
                    handleEventAsAction(event);
                }}
                icon={customIcon}
                text={customText}
                active={toggleButtonStates.custom}
            />
        </>
    );
};
mainStory.storyName = 'Toniq Toggle Button';
