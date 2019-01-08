import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
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
  selector: 'app-datepicker-year',
  template: `
    <mat-form-field [formGroup]="formDegree">
      <input matInput [matDatepicker]="datenamtn" placeholder="Năm tốt nghiệp" formControlName='namtn'>
      <mat-datepicker-toggle matSuffix [for]="datenamtn"></mat-datepicker-toggle>
      <mat-datepicker #datenamtn startView="multi-year"
      (yearSelected)="chosenYearHandler($event,datenamtn)">
      </mat-datepicker>
    </mat-form-field>
  `,
  styleUrls: ['./datepicker-year.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatepickerYearComponent implements OnInit {
  @Input() formDegree: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  chosenYearHandler(normalizedYear: moment.Moment,datepicker) {
    const ctrlValue = this.formDegree.get("namtn").value;
    ctrlValue.year(normalizedYear.year());
    this.formDegree.get("namtn").setValue(ctrlValue);
    datepicker.close();
  }

}
