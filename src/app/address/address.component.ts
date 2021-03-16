import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {
  formAddress: FormGroup;
  private subscription: Subscription;
  constructor(private _appService: AppService) {

   }

  ngOnInit() {
      this.formAddress = this._appService.form.controls.addressForm as FormGroup;
      this.subscription = this.formAddress.valueChanges.subscribe(val => this._appService.form.controls.addressForm.patchValue(val,{emitEvent: false}))
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }

}
