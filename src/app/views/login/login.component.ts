import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import {AuthGuardGuard} from '../../auth-guard.guard';
import {Router} from '@angular/router';
import {NavRole} from '../../_nav';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  formDN: FormGroup;
  constructor(
    private fb: FormBuilder,
    private serLogin: LoginService,
    private router: Router,
    private auth: AuthGuardGuard
  ){}

  ngOnInit(): void {
    console.log(this.serLogin.getLogin());
    if(this.serLogin.getLogin())
      this.router.navigate(['dashboard']);
    this.formDN = this.fb.group({
      username: ['it-hiep',Validators.required],
      password: ['123456',Validators.required]
    });
  }
  
  onSubmit() {
    let body = {
      "UserName" : this.formDN.get('username').value,
      "UserPass" : this.formDN.get('password').value
    }
    this.serLogin.checkLogin(body)
    .then(resJson => {
      if(resJson) {
        this.serLogin.setLogin(true);
        this.serLogin.loadRole(body)
        .then(res => {
          if(res)
          {
            this.serLogin.setUserName(body.UserName);
            let navItems = JSON.parse(res.RoleDesc);
            NavRole.setRole(navItems);
            this.router.navigate(['dashboard']);
          }
        })
        .catch(err=>console.log(err + ''));
        //window.location.assign('#/dashboard');
      }
    }).catch(err => console.log(err + ''));
  }

 }
