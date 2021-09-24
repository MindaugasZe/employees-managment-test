import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  public employees:Employee[]=[];

  constructor( employeesService:EmployeesService) { 
    employeesService
      .getEmployees()
      .subscribe((employees: Employee[]) => (this.employees = employees));
  }

  ngOnInit(): void {
    
  }

}


