import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const MIN_LENGTH = 8;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup = {} as FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder)
  { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
        [Validators.required,
        Validators.minLength(MIN_LENGTH),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@\?\]])/)])
    });
  }

  submitForm(): void {
    const login: string = this.loginForm.get('login')?.value;
    const password: string = this.loginForm.get('password')?.value;
    this.authService.saveToken(login, password);
    this.router.navigateByUrl('/home');
  }
}
