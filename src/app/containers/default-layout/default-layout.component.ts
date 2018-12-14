import { Component, Input, OnInit } from '@angular/core';
import { NavRole } from '../../_nav';
import { element } from 'protractor';
import { LoginService } from '../../views/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = true;
  public element: HTMLElement = document.body;
  navItems: any;
  userName: string;

  constructor(
    private serLogin:LoginService
  ) {}

  ngOnInit(): void {
    this.navItems = NavRole.getRole();
    this.userName = this.serLogin.getUserName();
  }

}
