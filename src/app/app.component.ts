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

  eventBinding ="Event Binding"
  counter= 0;
  clickMe(){
    this.counter ++
    console.log(`you clicked me ${this.counter} times`)
  }

  twoWayDataBinding = "Two Way Data Binding"
  fName="Tuan"
  lName="Bui"

  getFullName(){
    console.log(this.fName + ' ' + this.lName )
    return this.fName + ' ' + this.lName
  }
}
