// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NhansuRoutingModule } from './nhansu-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import {AgGridModule} from 'ag-grid-angular';
import { EmployeeTailComponent } from './employee-tail/employee-tail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';

import { EmployeeTailgeComponent } from './employee-tailge/employee-tailge.component';
import { from } from 'rxjs';
import {DatepickerYearComponent} from './employee-tailge/datepicker-year.component';
import { AddDegreeComponent } from './employee-tailge/add-degree/add-degree.component';
import {EmployeeService} from './employee/employee.service';
@NgModule({
  imports: [
    NhansuRoutingModule,
    AgGridModule.withComponents([]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule
  ],
  exports: [
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeTailComponent,
    EmployeeTailgeComponent,
    DatepickerYearComponent,
    AddDegreeComponent
  ],
  entryComponents:[AddDegreeComponent],
  providers: [EmployeeService]
})
export class NhansuModule { }
