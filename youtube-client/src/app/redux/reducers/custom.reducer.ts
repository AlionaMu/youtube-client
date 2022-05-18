import { ECustomActions, CustomActions } from '../actions/custom.actions';
import { initialCustomState, CustomState } from './../state/custom.state';

export const customReducers = (
  state = initialCustomState,
  action: CustomActions
): CustomState => {
  switch (action.type) {
    case ECustomActions.AddToCustom: {
      return {
        ...state,
        customItems: [...state.customItems, action.payload]
      };
    }
    case ECustomActions.SetCustom: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
