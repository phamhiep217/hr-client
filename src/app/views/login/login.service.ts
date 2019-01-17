import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class LoginService {
    userName: string;
    isLogin: boolean=false;
    constructor(){}

    setUserName(data) {
        this.userName = data;
    }
    getUserName() {
        return this.userName;
    }

    setLogin(iBool) {
        this.isLogin = iBool;
    }
    getLogin() {
        return this.isLogin;
    }

}