import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const MIN_LENGTH = 3;
const MAX_LENGTH = 20;
const DESC_MAX_LENGTH = 255;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public adminForm: FormGroup = {} as FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder)
  { }

  public ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      title: new FormControl('',
       [Validators.required,
       Validators.minLength(MIN_LENGTH),
       Validators.maxLength(MAX_LENGTH),
      ]),
      description: new FormControl('',
        [Validators.minLength(DESC_MAX_LENGTH)]),
      img: new FormControl('',
      [Validators.required,
      Validators.pattern(/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/),
      ]),
      video: new FormControl('',
      [Validators.required,
      Validators.pattern(/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/),
      ]),
      date: new FormControl('',
      [Validators.required,
      Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/),
      ]),
    });
  }

  submitForm(): void {
    this.router.navigateByUrl('/home');
  }
}
