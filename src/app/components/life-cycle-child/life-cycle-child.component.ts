import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {

  //@Input() title?: string

  constructor(private http: HttpClient) { 
    console.log('This is Constructor of Child')
  }

  ngOnChanges(){
    console.log('This is ngOnchanges Hook of Child')

  }

  ngOnInit(): void {
    console.log('This is ngOnInit Of Child')

  }

  ngDoCheck(){
    console.log('This is ngDoCheck Of Child')
  }

  ngAfterContentInit(){
    console.log('This is ngAfterContentInit Of Child')
  }

  ngAfterContentChecked(){
    console.log('This is ngAfterContentChecked Of Child')
  }

  ngAfterViewInit(){
    console.log('This is ngAfterViewInit Of Child')
  }

  ngAfterViewChecked(){
    console.log('This is ngAfterViewChecked Of Child')
  }

  ngOnDestroy(){
    console.log('This is ngOnDestroy Of Child')
  }

}
