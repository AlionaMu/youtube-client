import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginValue: string;
  public passwordValue: string;

  constructor(public authService: AuthService, public router: Router) { }

  clickLoginInput(event: any): void {
    this.loginValue = event.target.value;
    this.authService.loginInput = event.target.value;
  }

  clickPasswordInput(event: any): void {
    this.passwordValue = event.target.value;
    this.authService.passwordInput = event.target.value;
  }

  submitForm(): void {
    this.authService.saveToken();
    this.router.navigateByUrl('/home');
  }
}
