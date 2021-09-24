import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesTableComponent } from './employees-list/employees-table/employees-table.component';
import { NoEmployeesMessageComponent } from './employees-list/no-employees-message/no-employees-message.component';
import { EmployeesFormComponent } from './employees-list/employees-form/employees-form.component';





@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesTableComponent,
    NoEmployeesMessageComponent,
    EmployeesFormComponent,
    
    ],
    providers:[EmployeesService],
  imports: [
    CommonModule, SharedModule,ReactiveFormsModule,
  ]
})
export class EmployeesModule { }
