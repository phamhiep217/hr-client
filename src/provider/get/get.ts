import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Helps } from '../../utils/helps';

@Injectable()

export class GetProvider {
    constructor(
        private http: Http,
    ) { }

    private getWrapper(url) {
        return this.http.get(Helps.prefixApi() + url)
            .toPromise()
            .then(res => res.json());
    }

    getEmployees() {
        return this.getWrapper(`/api/Emps`);
    }

    getUsers() {
        return this.getWrapper(`/users/getuser`);
    }

    getPositions() {
        return this.getWrapper(`/api/Positions`);
    }

    getDepartments() {
        return this.getWrapper(`/api/Departments`);
    }

    getProvinces() {
        return this.getWrapper(`/api/Provinces`);
    }
    getNations() {
        return this.getWrapper(`/api/Nations`);
    }
    getEthnics() {
        return this.getWrapper(`/api/Ethnics`);
    }
    getLstDegreeByEmpID(EmpID){
        return this.getWrapper(`/api/Degrees/LstDegreeByEmpID?id=`+EmpID);
    } 

}