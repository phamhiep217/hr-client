import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'app-employee-tail',
  templateUrl: './employee-tail.component.html',
  styleUrls: ['./employee-tail.component.scss']
})
export class EmployeeTailComponent implements OnInit {
  objEmp : any;
  constructor(
    public navCtrl: NgxNavigationWithDataComponent
  ){}

  ngOnInit() {
    this.objEmp = this.navCtrl.get('data');
  } 

}
