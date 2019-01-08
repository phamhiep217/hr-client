import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialogRef} from '@angular/material';
import * as moment from 'moment';
import { Helps } from '../../../../../utils/helps';
import {EmployeeService} from '../../employee/employee.service';
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-add-degree',
  templateUrl: './add-degree.component.html',
  styleUrls: ['./add-degree.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AddDegreeComponent implements OnInit {
  formDegree : FormGroup;
  lstDegree : any[]; lstRanking : any[]; 
  constructor(
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<AddDegreeComponent>,
    private service : EmployeeService
  ){}

  ngOnInit() {
    let objDegree = this.service.getDegree();
    this.formDegree = this.fb.group({
      trinhdo:objDegree.trinhdo,
      noidaotao:objDegree.noidaotao,
      khoa:objDegree.khoa,
      chuyennganh:objDegree.chuyennganh,
      namtn:[moment(objDegree.namtn,"YYYY")],
      xeploai:objDegree.xeploai
    });
    this.lstDegree = Helps.getDegree();
    this.lstRanking = Helps.getRanking();
  }

  chosenYearHandler(normalizedYear: moment.Moment,datepicker) {
    const ctrlValue = this.formDegree.get("namtn").value;
    ctrlValue.year(normalizedYear.year());
    this.formDegree.get("namtn").setValue(ctrlValue);
    datepicker.close();
  }

  onAddDegree(){
    
  }

  onClose(){
    this.dialogRef.close();
  }

}
