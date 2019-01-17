import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmployeeService {
    degree : any;
    constructor(){}

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

}