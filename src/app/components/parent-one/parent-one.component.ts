import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent  {

  counter=1;

  countChangedHandler(count:number){
    this.counter=count;
    console.log(count)
  }

}
