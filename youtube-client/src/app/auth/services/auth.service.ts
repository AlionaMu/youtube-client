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

  getName(): string {
    return localStorage.getItem('login');
  }

  logOut() {
    this.logged = false;
  }

  saveToken(): void {
    console.log(this.loginInput, this.passwordInput)
    localStorage.setItem('login', this.loginInput);
    localStorage.setItem('password', this.passwordInput);
  }

  isToken(): boolean {
    if (this.storageLogin && this.storagePassword) {
      this.logged = true;
      return true;
    } else {
      this.logged = false;
      return false;
    }
  }
}
