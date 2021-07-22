import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { DirectiveComponent } from './structural-directives/directive/directive.component';
import { NgSwitchComponent } from './structural-directives/ng-switch/ng-switch.component';
import { NgIfComponent } from './structural-directives/ng-if/ng-if.component';
import { NgClassComponent } from './attribute-directives/ng-class/ng-class.component';
import { NgStyleComponent } from './attribute-directives/ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    ProductComponent,
    DirectiveComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
