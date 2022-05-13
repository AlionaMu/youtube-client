import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isToken()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
