import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  columnDefs = [
    {headerName: 'Mã Nhân Viên', field: 'EmpCode', checkboxSelection: true, headerCheckboxSelection: true,},
    {headerName: 'Tên Nhân Viên', field: 'EmpName' },
    {headerName: 'Mã Chấm Công', field: 'EmpTimekeepCode'},
    {headerName: 'Tên Chấm Công', field: 'EmpTimekeepName'},
    {headerName: 'Giới Tính', field: 'EmpGender'},
    {headerName: 'Mã Công Ty', field: 'FK_CompCode'},
    {headerName: 'Mã Khu Vực', field: 'FK_AreaCode'},
    {headerName: 'Mã Phòng Ban', field: 'FK_DeptCode'},
    {headerName: 'Trạng Thái', field: 'EmpStatus'}
  ];
  rowData : any;
  constructor(private serEmployee:EmployeeService) { }

  ngOnInit() {
    this.rowData = [];
    let dataEmp = [];
    this.serEmployee.getEmployees()
    .then(res => {
      if(res){
        for ( let i=0 ; i < res.length ; i++)
        {
          let objEmp = {
            EmpCode: res[i].EmpCode, 
            EmpName: res[i].EmpName, 
            EmpTimekeepCode: res[i].EmpTimekeepCode,
            EmpTimekeepName: res[i].EmpTimekeepName,
            EmpGender: res[i].EmpGender,
            FK_CompCode: res[i].FK_CompCode,
            FK_AreaCode:res[i].FK_AreaCode,
            FK_DeptCode: res[i].FK_DeptCode,
            EmpStatus: res[i].EmpStatus
          }
          dataEmp.push(objEmp);
        } 
        this.rowData = dataEmp;
      }
    })
    .catch(err => console.log(err));
  }
  
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
  }
  
  onrowDoubleClicked() {
    
  }
}
