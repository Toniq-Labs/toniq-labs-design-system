import {ToniqButton as NativeToniqButton} from './toniq-button/toniq-button.component';
import {ToniqIcon as NativeToniqIcon} from './toniq-icon/toniq-icon.component';
import {ToniqToggleButton as NativeToniqToggleButton} from './toniq-toggle-button/toniq-toggle-button.component';
import {wrapInReactComponent} from './wrap-native-element';

export const ToniqButton = wrapInReactComponent(NativeToniqButton);
export const ToniqIcon = wrapInReactComponent(NativeToniqIcon);
export const ToniqToggleButton = wrapInReactComponent(NativeToniqToggleButton);
