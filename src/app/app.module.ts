import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { CustomDirective } from './directives/custom.directive';
import { EmojiDirective } from './directives/emoji.directive';
import { PipeComponent } from './components/pipe/pipe.component';
import { MoneyPipe } from './pipes/money.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { LifeCycleChildComponent } from './components/life-cycle-child/life-cycle-child.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentCustomerComponent } from './components/parent-customer/parent-customer.component';
import { ChildCustomerComponent } from './components/child-customer/child-customer.component';
import { ChildDestroyComponent } from './components/child-destroy/child-destroy.component';
import { ParentDestroyComponent } from './components/parent-destroy/parent-destroy.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PeopleComponent } from './components/people/people.component';
import { StudentMongoDataComponent } from './components/student-mongo-data/student-mongo-data.component';
import { StudentSqlDataComponent } from './components/student-sql-data/student-sql-data.component';

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
    NgStyleComponent,
    CustomDirective,
    EmojiDirective,
    PipeComponent,
    MoneyPipe,
    GenderPipe,
    ParentComponent,
    ChildComponent,
    ChildOneComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    ChildThreeComponent,
    LifeCycleHooksComponent,
    LifeCycleChildComponent,
    ParentCustomerComponent,
    ChildCustomerComponent,
    ChildDestroyComponent,
    ParentDestroyComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ProductListComponent,
    TodoComponent,
    UserComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    UserDetailsComponent,
    PeopleComponent,
    StudentMongoDataComponent,
    StudentSqlDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
