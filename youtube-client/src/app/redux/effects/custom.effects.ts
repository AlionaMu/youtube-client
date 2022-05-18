import { Injectable } from '@angular/core';
import { Effect, ofType, Actions, createEffect } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';

import { CardState } from '../../core/models/card-state.model';
import { AdminService } from './../../core/services/admin.service';
import { ECustomActions, SetCustom, AddToCustom } from '../actions/custom.actions';

@Injectable()
export class CustomEffects {

  constructor(
    private adminService: AdminService,
    private actions$: Actions,
   // private _store: Store<AppState>
  ) {}

  public addToCustom$: Observable<AddToCustom> = createEffect(() => {
    return this.actions$.pipe(
    ofType<SetCustom>(ECustomActions.SetCustom),
    switchMap(() => this.adminService.createCard()),
    switchMap((newCard: CardState) => {
      return of(new AddToCustom(newCard));
    })
  )
  })
}
