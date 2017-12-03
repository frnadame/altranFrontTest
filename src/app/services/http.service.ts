import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {

    constructor(
        private http: Http
    ) {}

    getData = function() {
        return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .map(res => res.json());
    };
}
