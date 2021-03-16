import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})

export class AreasComponent implements OnInit, OnDestroy {
  task = [
    'Finance', 'Operations', 'IT', 'Sales', 'Administrative', 'Legal', 'Marketing'
    ]
  private subscription: Subscription;
    formAreas: FormGroup;
    constructor(private _appService: AppService) {

     }

    ngOnInit() {
        this.formAreas = this._appService.form.controls.areasForm as FormGroup;
        this.subscription = this.formAreas.valueChanges.subscribe(val => this._appService.form.controls.areasForm.patchValue(val,{emitEvent: false}))
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

  }
