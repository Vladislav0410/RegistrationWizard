import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Injectable({
    providedIn: 'root',
})

export class AppService {
    form: FormGroup;
constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
        contactInfoForm : this._formBuilder.group({
            firstCtrl: ['', Validators.required],
            emailCtrl: ['', Validators.email],
            thirdCtrl: ['', Validators.required],
            confirmEmailCtrl: ['', [Validators.email, this.matchOtherValidator('emailCtrl')]],
            fifthCtrl: [''],
            sixthCtrl: ['', [Validators.required, Validators.minLength(9)]],
            seventhCtrl: ['', Validators.required],
            eighthCtrl: [''],
            ninethCtrl: ['', Validators.required],
            tenthCtrl: [''],
            eleventhCtrl: ['', Validators.required]
          }),
          areasForm : this._formBuilder.group({
            Finance: [false],
            Operations: [false],
            IT: [false],
            Sales: [false],
            Administrative: [false],
            Legal: [false],
            Marketing: [false],
            secondCtrl: ['', Validators.required]
          }),
          addressForm : this._formBuilder.group({
            firstCtrl: ['', Validators.required],
            secondCtrl: ['Test', Validators.required],
            thirdCtrl: ['', Validators.required],
            fourthCtrl: ['', Validators.required],
            fifthCtrl: ['', Validators.required],
            sixthCtrl: ['', Validators.required]
          }),
          passwordForm : this._formBuilder.group({
            firstCtrl: ['', [Validators.required, Validators.minLength(8), PasswordValidator.strong]],
            secondCtrl: ['', [Validators.required, this.matchOtherValidator('firstCtrl')]],
            captcha: ['', Validators.required],
            thirdCtrl: [false, Validators.requiredTrue]
          }),
    });
 }

 matchOtherValidator (otherControlName: string) {

  let thisControl: FormControl;
  let otherControl: FormControl;

  return function matchOtherValidate (control: FormControl) {

    if (!control.parent) {
      return null;
    }

    if (!thisControl) {
      thisControl = control;
      otherControl = control.parent.get(otherControlName) as FormControl;
      if (!otherControl) {
        throw new Error('matchOtherValidator(): other control is not found in parent group');
      }
      otherControl.valueChanges.subscribe(() => {
        thisControl.updateValueAndValidity();
      });
    }

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== thisControl.value) {
      return {
        matchOther: true
      };
    }

    return null;

  }

}
}
