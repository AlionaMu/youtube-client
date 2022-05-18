import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { customReducers } from './custom.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  customItem: customReducers
};
