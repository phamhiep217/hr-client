import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './views/login/login.service';
import {Router} from '@angular/router';
@Injectable(
 //providedIn: 'root'
)
export class AuthGuardGuard implements CanActivate { 

  constructor(
    private serLogin: LoginService,
    private router: Router
  ){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {   
    if(this.serLogin.getLogin())
      return true;
    // if(this.router.routerState.snapshot.url === '') {
    //   this.serLogin.setLogin(true);
    //   this.router.navigate([state.url]);
    // }
  }
}
