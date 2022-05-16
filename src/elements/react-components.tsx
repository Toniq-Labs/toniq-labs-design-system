import {ToniqButton as NativeToniqButton} from './toniq-button/toniq-button.element';
import {ToniqCheckbox as NativeCheckbox} from './toniq-checkbox/toniq-checkbox.element';
import {ToniqIcon as NativeToniqIcon} from './toniq-icon/toniq-icon.element';
import {ToniqToggleButton as NativeToniqToggleButton} from './toniq-toggle-button/toniq-toggle-button.element';
import {wrapInReactComponent} from './wrap-native-element';

export const ToniqButton = wrapInReactComponent(NativeToniqButton);
export const ToniqCheckbox = wrapInReactComponent(NativeCheckbox);
export const ToniqIcon = wrapInReactComponent(NativeToniqIcon);
export const ToniqToggleButton = wrapInReactComponent(NativeToniqToggleButton);
