import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit, OnDestroy {
  siteKey : string = '6LcpQngaAAAAAKhQnbg8GLJ1zgW7pAyNvParQ8D-'
  hide = true;
  hide1 = true;
  private subscription: Subscription;
  formPassword: FormGroup;
  constructor(private _appService: AppService) {

   }
   ngOnInit() {
    this.formPassword = this._appService.form.controls.passwordForm as FormGroup;
    this.subscription = this.formPassword.valueChanges.subscribe(val => this._appService.form.controls.passwordForm.patchValue(val,{emitEvent: false}))
}

ngOnDestroy(){
   this.subscription.unsubscribe();
}

}
