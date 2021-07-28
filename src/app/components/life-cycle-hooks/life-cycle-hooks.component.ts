import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  title: string="Life Cycle Hook Test"
  @Input() city: string = 'Hyderabad'

  constructor(private http: HttpClient) { 
    console.log('This is Constructor of Parent')
  }

  ngOnChanges(){
    console.log('This is ngOnchanges Hook of Parent')
  }

  ngOnInit(): void {
    console.log('This is ngOnInit Of Parent')
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      console.log(data)
    })
  }

  ngDoCheck(){
    console.log('This is ngDoCheck Of Parent')
  }

  ngAfterContentInit(){
    console.log('This is ngAfterContentInit Of Parent')
  }

  ngAfterContentChecked(){
    console.log('This is ngAfterContentChecked Of Parent')
  }

  ngAfterViewInit(){
    console.log('This is ngAfterViewInit Of Parent')
  }

  ngAfterViewChecked(){
    console.log('This is ngAfterViewChecked Of Parent')
  }

  ngOnDestroy(){
    console.log('This is ngOnDestroy Of Parent')
  }
}
