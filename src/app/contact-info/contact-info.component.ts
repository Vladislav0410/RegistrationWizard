import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  formContactInfo: FormGroup;
  constructor(private _appService: AppService) {

   }

   ngOnInit() {
    this.formContactInfo = this._appService.form.controls.contactInfoForm as FormGroup;
    this.subscription = this.formContactInfo.valueChanges.subscribe(val => this._appService.form.controls.contactInfoForm.patchValue(val,{emitEvent: false}))
}

ngOnDestroy(){
   this.subscription.unsubscribe();
}

}
