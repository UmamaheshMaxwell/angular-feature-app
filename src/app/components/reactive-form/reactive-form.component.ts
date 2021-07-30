import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  countryList: Country[] = [
    new Country(1, "India"),
    new Country(2, "Japan"),
    new Country(3, "Australia"),
  ]

  contactForm = new FormGroup({
    firstName:  new FormControl(),
    lastName:  new FormControl(),
    email:  new FormControl(),
    gender:  new FormControl(),
    isAdmin:  new FormControl(),
    country:  new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    comments: new FormControl()
  })

  onSubmit(){
    console.log(this.contactForm.value)
  }
  
}
