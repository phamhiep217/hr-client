import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Helps } from '../../utils/helps';

@Injectable()

export class PostProvider {
    constructor(private http: Http) {
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

    checkLogin(body) {
        return this.postWrapper(`/users/checklogin`, body);
    }

    loadRole(body) {
        return this.postWrapper(`/users/loadrole`, body);
    }

    updateEmp(id,body) {
        return this.postWrapper(`/api/Emps/`+id,body);
    }

}