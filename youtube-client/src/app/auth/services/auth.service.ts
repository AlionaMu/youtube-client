import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logged: boolean;

  constructor() {}

  public storageLogin = localStorage.getItem('login');
  public storagePassword = localStorage.getItem('password');

  public get getName(): string {
    return localStorage.getItem('login');
  }

  public logOut() {
    this.logged = false;
  }

  public saveToken(login: string, password: string): void {
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
  }

  public isToken(): boolean {
    if (this.storageLogin && this.storagePassword) {
      this.logged = true;
      return true;
    } else {
      this.logged = false;
      return false;
    }
  }
}
