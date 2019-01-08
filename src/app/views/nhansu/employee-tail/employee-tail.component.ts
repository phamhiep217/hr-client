import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee/employee.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-employee-tail',
  templateUrl: './employee-tail.component.html',
  styleUrls: ['./employee-tail.component.scss']
})
export class EmployeeTailComponent implements OnInit {
  objEmp : any;
  constructor(
    private actRoute: ActivatedRoute
  ){}

  ngOnInit() {
    console.log(this.actRoute.snapshot);
  } 

}
