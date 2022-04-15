import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  name = 'Your Name';

  constructor(public loginService: LoginService, public router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
