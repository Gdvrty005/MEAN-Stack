import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    id: number;
    constructor(private http: Http) { }
 
    logout() {
        localStorage.removeItem('currUser');
    }


}