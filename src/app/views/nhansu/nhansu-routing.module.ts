import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeTailComponent } from './employee-tail/employee-tail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'nhansu'
    },
    children: [
      {
        path: 'emp',
        component: EmployeeComponent,
        data: {
          title: 'Nhân viên'
        }
      },
      {
        path: 'emptail',
        component: EmployeeTailComponent,
        data: {
          title: 'Chi tiết nhân viên'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhansuRoutingModule {}
