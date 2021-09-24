import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {
   public employeeForm!: FormGroup;

  constructor(
    private employeesService:EmployeesService, 
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.employeeForm=this.createEmployeeForm();
  }

  addEmployee():void{
    this.employeesService
    .addEmployee(this.employeeForm.value)
    .subscribe(()=>{
      this.employeeForm.reset();
    });
  }

  private createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      position: ["", Validators.required],
      salary: ["", Validators.required]
    });
  }

  get firstName() {
    return this.employeeForm.get('firstName');
  }


}
