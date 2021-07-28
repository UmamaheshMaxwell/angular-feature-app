import { Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';


@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent {

  constructor( private cdref: ChangeDetectorRef ) {}
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
@ViewChild(ChildThreeComponent) child?: ChildThreeComponent;

increment(){
  this.child?.increment()
}

decrement(){
  this.child?.decrement()
}

}
