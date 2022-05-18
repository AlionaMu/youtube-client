import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  //AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
/*import { CardState } from 'src/app/core/models/card-state.model';
import { AdminService } from 'src/app/core/services/admin.service';
import { Store } from '@ngrx/store';
import { SetCustom } from 'src/app/redux/actions/custom.actions';*/

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
    private formBuilder: FormBuilder
   // public adminService: AdminService,
    //public store: Store
     )
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

  public submitForm(): void {
    console.log('here', this.adminForm.status);
    //this.create();
  }

 /* private create(): void {
    const controls: {[key: string]: AbstractControl} = this.adminForm.controls;

    let controlsName =  Object.keys(controls);

    if (this.adminForm.invalid) {
      controlsName
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    let newCardValue: CardState = this.adminForm.value;

    controlsName.forEach(controlName => {
        controls[controlName].setValue('');
        controls[controlName].markAsUntouched();
      });
    this.adminService.setNewCard(newCardValue);

    // eslint-disable-next-line ngrx/prefer-action-creator-in-dispatch
    this.store.dispatch(new SetCustom());

  }*/
}
