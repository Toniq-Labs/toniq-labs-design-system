import {ToniqButton as NativeToniqButton} from './toniq-button/toniq-button.component';
import {ToniqIcon as NativeToniqIcon} from './toniq-icon/toniq-icon.component';
import {wrapInReactComponent} from './wrap-native-element';

export const ToniqButton = wrapInReactComponent(NativeToniqButton);
export const ToniqIcon = wrapInReactComponent(NativeToniqIcon);
