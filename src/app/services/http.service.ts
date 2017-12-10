import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Brastlewark } from '../brastlewark/brastlewark';


@Injectable()
export class HttpService {

    constructor(
        private client: Http
    ) {}

    getData = function() {
        return this.client.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .map(
            res => res.json()
        );
    };
}
