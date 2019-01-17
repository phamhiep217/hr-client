import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Helps } from '../../../../utils/helps';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import * as moment from 'moment';
import { AddDegreeComponent } from './add-degree/add-degree.component';
import { EmployeeService } from '../employee/employee.service';
import { GetProvider } from '../../../../provider/get/get';

@Component({
  selector: 'app-employee-tailge',
  templateUrl: './employee-tailge.component.html',
  styleUrls: ['./employee-tailge.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class EmployeeTailgeComponent implements OnInit {
  @Input() dataEmp: any;
  formPerson: FormGroup;
  formCitizen: FormGroup;
  lstGender: any[]; lstMarriage: any[]; lstReligion: any[];
  lstNoiCap: any[]; lstDepartment: any[]; lstPosition: any[];
  lstNation: any[]; lstEthnic: any[]; lstDegree: any[];
  maCC; tenCC; boPhan; chucVu; ngayBD; trangThai: string;
  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private getProvider: GetProvider
  ) { }

  ngOnInit() {
    this.lstGender = Helps.getGender();
    this.lstMarriage = Helps.getMarriageStatus();
    this.lstReligion = Helps.getReligion();
    if (this.dataEmp) {
      this.maCC = this.dataEmp.EmpTimekeepCode;
      this.tenCC = this.dataEmp.EmpTimekeepName;
      this.ngayBD = this.dataEmp.EmpWorkBeginDate;
      this.trangThai = this.dataEmp.EmpStatus;
      this.getProvider.getPositions()
        .then(res => {
          if (res) {
            this.lstPosition = res;
            let objPosition = this.lstPosition.find(x => x.PositionCode == this.dataEmp.FK_PositionCode);
            if (objPosition)
              this.chucVu = objPosition.PositionName;
          }
        })
        .catch(err => console.log(err));
        this.getProvider.getDepartments()
        .then(res => {
          if (res) {
            this.lstDepartment = res;
            let objDepartment = this.lstDepartment.find(x => x.DepartmentCode == this.dataEmp.FK_DeptCode);
            if (objDepartment)
              this.boPhan = objDepartment.DepartmentName;
          }
        })
        .catch(err => console.log(err));
    }
    let tManv = this.dataEmp ? this.dataEmp.EmpCode : '';
    let tTennv = this.dataEmp ? this.dataEmp.EmpName : '';
    let tGt = this.dataEmp ? this.dataEmp.EmpGender : '';
    let tNgaysinh = this.dataEmp && this.dataEmp.EmpBirth ? moment(this.dataEmp.EmpBirth, 'DD-MM-YYYY') : '';
    let tsocmnd = this.dataEmp ? this.dataEmp.EmpIDCard : '';
    let tNgaycapcm = this.dataEmp && this.dataEmp.EmpIDCardDate ? moment(this.dataEmp.EmpIDCardDate, 'DD-MM-YYYY') : '';
    let tNgayhethan = this.dataEmp && this.dataEmp.EmpIDCardDateExp ? moment(this.dataEmp.EmpIDCardDateExp, 'DD-MM-YYYY') : '';
    this.formPerson = this.fb.group({
      manv: [tManv],
      tennv: [tTennv],
      gt: [tGt],
      ngaysinh: [tNgaysinh]
    });
    this.formCitizen = this.fb.group({
      socmnd: [tsocmnd],
      noicap: [''],
      marriage: [''],
      ethnic: [''],
      religion: [''],
      nationality: [''],
      ngaycapcmnd: [tNgaycapcm],
      ngayhethan: [tNgayhethan]
    });
    this.getProvider.getProvinces()
    .then(res => {
      if(res){
        this.lstNoiCap = res;
        this.lstNoiCap.sort((a,b)=> {
          if(a.ProvinceCodeSearch < b.ProvinceCodeSearch)
          return -1;
          if(a.ProvinceCodeSearch > b.ProvinceCodeSearch)
          return 1;
          return 0;
        });
        //let objNoiCap = this.lstNoiCap.find(x=> x.ProvinceCode == this.dataEmp.EmpIDCardPlace);
        this.formCitizen.get('noicap').setValue(this.dataEmp.EmpIDCardPlace);
      }
    })
    .catch(err => console.log(err + ''));
    this.getProvider.getEthnics()
    .then(res => {
      if(res){
        this.lstEthnic = res;
        this.lstEthnic.sort((a,b) => {return a.AAOrder - b.AAOrder});
        //let objDanToc = this.lstEthnic.find(x => x.EthnicCode == this.dataEmp.EmpEthnic);
        this.formCitizen.get('ethnic').setValue(this.dataEmp.EmpEthnic);
      }
    })
    .catch(err => console.log(err + ''));
    this.getProvider.getNations()
    .then(res => {
      if(res){
        this.lstNation = res;
        this.lstNation.sort((a,b) => {return a.AAOrder - b.AAOrder});
        //let objQuocTich = this.lstNation.find(x => x.NationCode == this.dataEmp.EmpNationality);
        this.formCitizen.get('nationality').setValue(this.dataEmp.EmpNationality);
      }
    })
    .catch(err => console.log(err + ''));
    this.getProvider.getLstDegreeByEmpID(this.dataEmp.EmpID)
    .then(res => {
      console.log(res);
      if(res && res.length > 0){
        this.lstDegree = res;
        console.log(this.lstDegree);
      }
    })
    .catch(err => console.log(err+''));
  }

  onPerson() {
    console.log(this.formPerson.value);
    console.log(this.formCitizen.value);
  }

  onDegree() {
    this.service.initDegree();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddDegreeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  UpdateDegree() {
    let objDegree = {
      trinhdo: 1,
      noidaotao: 'Đại học công nghệ',
      khoa: 'CNTT',
      chuyennganh: 'Mạng máy tính',
      namtn: '2011',
      xeploai: 1
    };
    this.service.setDegree(objDegree);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddDegreeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  changeImg(){
    console.log('adbdd');
  }

}
