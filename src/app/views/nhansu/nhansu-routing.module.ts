import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from "./employee/employee.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhansuRoutingModule {}
