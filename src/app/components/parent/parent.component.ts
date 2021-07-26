import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  counter=5;
  name: string="child"

  increment(){
    this.counter ++;
  }

  decrement(){
    this.counter --;
  }
}
