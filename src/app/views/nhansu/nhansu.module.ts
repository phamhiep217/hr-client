// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhansuRoutingModule } from './nhansu-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import {AgGridModule} from 'ag-grid-angular';
import { EmployeeTailComponent } from './employee-tail/employee-tail.component';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  imports: [
    NhansuRoutingModule,
    AgGridModule.withComponents([]),
    CommonModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeTailComponent
  ]
})
export class NhansuModule { }
