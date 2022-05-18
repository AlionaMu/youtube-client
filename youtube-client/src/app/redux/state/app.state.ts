import { CustomState, initialCustomState } from './custom.state';

export interface AppState {
  customItem: CustomState;
}

export const initialAppState: AppState = {
  customItem: initialCustomState
};
