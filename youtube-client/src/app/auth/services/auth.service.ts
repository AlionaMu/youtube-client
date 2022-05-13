import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginInput: string;
  public passwordInput: string;
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

  public saveToken(): void {
    localStorage.setItem('login', this.loginInput);
    localStorage.setItem('password', this.passwordInput);
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
