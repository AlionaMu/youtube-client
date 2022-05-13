import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor( public router: Router, public authService: AuthService ) {}

  logout() {
    if (this.authService.logged) {
      localStorage.clear();
      this.authService.logOut();
      this.router.navigateByUrl('/auth');
    }
  }
}
