import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public error: boolean = false;
  public isAuthorized: boolean = false;

  constructor(private router: Router) {}
}
