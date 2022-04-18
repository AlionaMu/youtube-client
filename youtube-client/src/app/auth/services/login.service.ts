import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginInput: string;
  public passwordInput: string;

  constructor() {}

  public storageLogin = localStorage.getItem('login');
  public storagePassword = localStorage.getItem('password');

  saveToken(): void {
    localStorage.setItem('login', this.loginInput);
    localStorage.setItem('password', this.passwordInput);
  }

  isToken(): boolean {
    if (this.storageLogin && this.storagePassword) {
      return true;
    } else { return false; }
  }
}
