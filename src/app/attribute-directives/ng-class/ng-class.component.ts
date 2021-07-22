import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  displayColor=false
  displaySize=false;
  isColor =true;
  isSize=true;

  cssStringVar:string = "red size20"
  cssArrayVar: string[] =['blue', 'size20']
  cssObjectVar:object = {'red' : this.isColor, 'size20': this.isSize}
}
