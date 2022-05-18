import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { CustomState } from '../state/custom.state';

// tslint:disable-next-line:typedef
const customState = (state: AppState) => state.customItem;

// tslint:disable-next-line:typedef
export const selectCustom = createSelector(
  customState,
  (state: CustomState) => state.customItems
);
