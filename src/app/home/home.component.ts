import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [DashboardComponent]
})
export class HomeComponent {

  isInputFieldEmpty: boolean = true;
  order: any;

  constructor(private dashboardComponent: DashboardComponent) {
    
  }

  // Checks if the input field is empty or has value and change the button
  checkInput(name: string) {
    if ( name.length > 0){
      this.isInputFieldEmpty = false;
    }
    else {
      this.isInputFieldEmpty = true;
    }
  }

  // Function get the values from the form and create a model according to the values.
  submitValues(name: string, phone: string) {
    this.dashboardComponent.passValues(name, phone);
  }
}
