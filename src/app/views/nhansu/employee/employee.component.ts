import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { GetProvider } from '../../../../provider/get/get';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
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
  lstEmps : any;
  constructor(
    private getProvider:GetProvider,
    public navCtrl: NgxNavigationWithDataComponent
  ){}

  ngOnInit() {
    this.rowData = [];
    let dataEmp = [];
    this.getProvider.getEmployees()
    .then(res => {
      if(res){
        this.lstEmps = res;
        for ( let i=0 ; i < res.length ; i++)
        {
          let objEmp = res[i];
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
  
  onrowDoubleClicked(event) {
   this.navCtrl.navigate('nhansu/emptail', {data:event.data});
  }
}
