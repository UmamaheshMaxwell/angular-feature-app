import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent {
  count=0;

  increment(){
    this.count++
  }

  decrement(){
    this.count--
  }

}
