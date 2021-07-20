import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interPolation ='One-Way Data Binding'
  firstName=  'Scott';
  lastName = "Desatnick"
  person = {name: 'Adam'}

  propertyBinding = "Property Binding"
  innerText="This value is coming from component"
  isDisabled = true;
  url="https://angular.io/cli"
}
