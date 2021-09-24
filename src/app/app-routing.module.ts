import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from './agreements/agreements.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { LeavesComponent } from './leaves/leaves.component';

const routes: Routes = [
  {path:"", component:EmployeesListComponent},
  {path:"employees-list", component:EmployeesListComponent},
  {path:"agreements" , component:AgreementsComponent},
  {path:"bonuses" , component:BonusesComponent},
  {path:"leaves" , component:LeavesComponent},
  {path: "**", redirectTo:"employees-list"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
