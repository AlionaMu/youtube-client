import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginValue: string;
  public passwordValue: string;

  constructor(public loginService: LoginService, public router: Router) { }

  clickLoginInput(event: any): void {
    this.loginValue = event.target.value;
    console.log(event.target.value)
    this.loginService.loginInput = event.target.value;
  }

  clickPasswordInput(event: any): void {
    this.passwordValue = event.target.value;
    console.log(event)
    this.loginService.passwordInput = event.target.value;
  }

  submitForm(): void {
    this.loginService.saveToken();
    this.router.navigateByUrl('/home');
  }
}
