import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeesModule } from './employees/employees.module';
import { AgreementsComponent } from './agreements/agreements.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { LeavesComponent } from './leaves/leaves.component';



@NgModule({
  declarations: [
    AppComponent,
    AgreementsComponent,
    BonusesComponent,
    LeavesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    CoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
