import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Helps } from '../../../../utils/helps';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialog, MatDialogConfig} from '@angular/material'
import * as moment from 'moment';
import { AddDegreeComponent } from './add-degree/add-degree.component';
import {EmployeeService} from '../employee/employee.service';

@Component({
  selector: 'app-employee-tailge',
  templateUrl: './employee-tailge.component.html',
  styleUrls: ['./employee-tailge.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class EmployeeTailgeComponent implements OnInit {
  @Input() dataEmp : any;
  formPerson : FormGroup;
  formCitizen : FormGroup;
  lstGender : any[]; lstMarriage : any[]; lstReligion : any[];
  lstNoiCap : any[]; 

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ){}

  ngOnInit() {
    this.lstGender = Helps.getGender();
    this.lstNoiCap = Helps.getNoiCap();
    this.lstMarriage = Helps.getMarriageStatus();
    this.lstReligion = Helps.getReligion();
    console.log(this.dataEmp);
    this.formPerson = this.fb.group({
      manv:[''],
      tennv:[''],
      gt:[''],
      ngaysinh:[moment()]
    });
    this.formCitizen = this.fb.group({
      socmnd:[''],
      noicap:[''],
      ngaycapcmnd:[moment()],
      ngayhethan:[moment()]
    });
  }

  onPerson(){
    console.log(this.formPerson.value);
    console.log(this.formCitizen.value);
  }

  onDegree() {
    this.service.initDegree();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddDegreeComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
   
    });
  }

  UpdateDegree() {
    let objDegree = {
      trinhdo:1,
      noidaotao:'Đại học công nghệ',
      khoa:'CNTT',
      chuyennganh:'Mạng máy tính',
      namtn: '2011',
      xeploai:1
    };
    this.service.setDegree(objDegree);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddDegreeComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      
    });
  }

}
