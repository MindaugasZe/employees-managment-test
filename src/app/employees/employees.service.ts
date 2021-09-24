import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../shared/employee';
import { EMPLOYEES } from '../shared/mock-employees';

@Injectable()
export class EmployeesService {

    addEmployee(employee: Employee): Observable<number> {
      let maxId = 0;
      EMPLOYEES.forEach( ({ id }) =>maxId = id >maxId? id : maxId);
  return of(
    EMPLOYEES.push({
      ...employee,
      id: maxId + 1
    })
  );
  }

    removeEmployee(id: number): Observable<Employee[]> {
    const index: number = EMPLOYEES.findIndex(employee => employee.id === id);
    return of(EMPLOYEES.splice(index, 1));
  }

    getEmployees():Observable<Employee[]>{
      return of(EMPLOYEES);
    }


    
}
