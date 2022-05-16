import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.scss']
})
export class AdminButtonComponent {

  constructor( public router: Router ) {}

  onClick() {
      this.router.navigateByUrl('/admin');
  }
}
