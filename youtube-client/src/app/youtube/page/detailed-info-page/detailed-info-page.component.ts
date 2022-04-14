import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss']
})
export class DetailedInfoPageComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
  }

}
