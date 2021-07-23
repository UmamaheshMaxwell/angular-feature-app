import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
title:string ='Date Pipes'
toDate:Date =  new Date();

 casePipe ="UpperCase && Lowercase"
 message="Welcome to the world of Angular"

 amount:number = 175.0000

}
