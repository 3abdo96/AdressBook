import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { AddEditComponent } from './employee/add-edit/add-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobsComponent } from './jobs/jobs.component';
import { AddEditJobComponent } from './jobs/add-edit-job/add-edit-job.component';
import { ShowJobComponent } from './jobs/show-job/show-job.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditDepComponent,
    AddEditComponent,
    JobsComponent,
    AddEditJobComponent,
    ShowJobComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
