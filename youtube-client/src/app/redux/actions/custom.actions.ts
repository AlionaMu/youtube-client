/* eslint-disable ngrx/prefer-action-creator */
import { Action } from '@ngrx/store';
import { CardState } from '../../core/models/card-state.model';

export enum ECustomActions {
  SetCustom = 'Set Custom',
  AddToCustom = 'Add To Custom'
}

export class SetCustom implements Action {
  public readonly type = ECustomActions.SetCustom;
}

export class AddToCustom implements Action {
  // tslint:disable-next-line:typedef
  public readonly type = ECustomActions.AddToCustom;
  constructor(public payload: CardState) {}
}

export type CustomActions = SetCustom | AddToCustom;
