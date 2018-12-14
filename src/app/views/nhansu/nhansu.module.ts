// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhansuRoutingModule } from './nhansu-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  imports: [
    NhansuRoutingModule,
    AgGridModule.withComponents([]),
    CommonModule 
  ],
  declarations: [
    EmployeeComponent
  ]
})
export class NhansuModule { }
