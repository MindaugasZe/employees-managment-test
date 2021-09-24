import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {
  public employees:Employee[]=[];

  constructor(private employeesService: EmployeesService) {}

    ngOnInit(): void {
    this.loadEmployees();
  }

  public loadEmployees(): void {
    this.employeesService
      .getEmployees()
      .subscribe((employees: Employee[]) => this.employees = employees);
  }

   removeEmployee(id: number): void {
    this.employeesService
      .removeEmployee(id)
      .subscribe(() => this.loadEmployees());
  }

}
