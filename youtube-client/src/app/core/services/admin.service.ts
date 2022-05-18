import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardState } from '../models/card-state.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public newCard: CardState;

  constructor() { }

  public setNewCard(data: CardState): void {
    this.newCard = {...data, createdAt: new Date().toString()};
  }

  public createCard(): Observable<CardState> {
    return of(this.newCard);
  }
}
