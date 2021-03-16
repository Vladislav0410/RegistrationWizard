import { Component, ViewChild, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  stepName = ['Contact info', 'Areas', 'Address', 'Password', 'Completed']
  @ViewChild('stepper') stepper: MatStepper;
  tab: number = 0;

  constructor(public appService: AppService) { }

  ngOnInit() {}

  stepperChangeTab(key: string) {
    switch (key) {
      case "up":
        this.stepper.selectedIndex++;
        this.tab = this.stepper.selectedIndex;
        break;
      case "down":
        this.stepper.selectedIndex--;
        this.tab = this.stepper.selectedIndex;
        break;
      case "click":
        this.tab = this.stepper.selectedIndex;
        break;
    }
  }
}
