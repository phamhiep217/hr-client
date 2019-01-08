import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Helps } from '../../../../utils/helps';

@Injectable()

export class EmployeeService {
    degree : any;
    constructor(
        private http: Http,
        ){}
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

    initDegree() {
        this.degree = {
            trinhdo:'',
            noidaotao:'',
            khoa:'',
            chuyennganh:'',
            namtn:'',
            xeploai:''
        }
    }

    setDegree(obj) {
        this.degree = {
            trinhdo:obj.trinhdo,
            noidaotao:obj.noidaotao,
            khoa:obj.khoa,
            chuyennganh:obj.chuyennganh,
            namtn:obj.namtn,
            xeploai:obj.xeploai
        }
    }

    getDegree() {
        return this.degree;
    }

    getEmployees() {
        return this.getWrapper(`/api/Emps`);
    }

}