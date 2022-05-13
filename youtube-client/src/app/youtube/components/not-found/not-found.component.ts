import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public text: string = 'Sorry, smth went wrong((';

  constructor(public router: Router) { }

  goHome() {
    this.router.navigate(['']);
  }
}
