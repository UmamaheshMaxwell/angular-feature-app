import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template:`
  <div class="container">
    <h1>Student Name : {{name}}</h1>
  </div>
`,
  styles: [
    `h1 {color:red}`
  ]
})


export class StudentComponent {

    name ="Uma"

  constructor() { }

  getMessage(){
    let code = "hello"
    this.name ="Mahesh"
  }

  displayMessage(){

  }

}
