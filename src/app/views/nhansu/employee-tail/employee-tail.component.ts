import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-tail',
  templateUrl: './employee-tail.component.html',
  styleUrls: ['./employee-tail.component.scss']
})
export class EmployeeTailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    this.activatedRoute.snapshot.paramMap.get('data');
  }

}
