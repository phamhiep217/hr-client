import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Helps } from '../../../utils/helps';
import { Router } from '@angular/router';

@Injectable()

export class LoginService {
    userName: string;
    isLogin: boolean=false;
    constructor(private http: Http) {
     }

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

    private postWrapper(url, body, isJson = true) {
        let options = {
            headers: new Headers({ 'Content-Type': 'application/json' })
        };
        body = JSON.stringify(body).replace(/"\s+|\s+"/g, '"');
        return this.http.post(Helps.prefixApi() + url, body, options)
            .toPromise()
            .then(res => res.json());
    }

    private getWrapper(url) {
        return this.http.get(Helps.prefixApi() + url)
            .toPromise()
            .then(res => res.json());
    }

    checkLogin(body) {
        return this.postWrapper(`/users/checklogin`, body);
    }

    loadRole(body) {
        return this.postWrapper(`/users/loadrole`, body);
    }

    getUsers() {
        return this.getWrapper(`/users/getuser`);
    }

}