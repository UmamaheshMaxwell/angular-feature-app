import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent  {

  countryList: Country[] = [
    new Country(1, "India"),
    new Country(2, "Japan"),
    new Country(3, "Australia"),
  ]

  getFormData(formData: any){
    console.log(formData.value)
  }

}
