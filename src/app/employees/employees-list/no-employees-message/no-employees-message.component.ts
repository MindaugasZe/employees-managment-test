import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-employees-message',
  templateUrl: './no-employees-message.component.html',
  styleUrls: ['./no-employees-message.component.scss']
})
export class NoEmployeesMessageComponent implements OnInit {

@Input() noEmployees!:boolean;
  constructor() { }

  ngOnInit(): void {

  }

}
