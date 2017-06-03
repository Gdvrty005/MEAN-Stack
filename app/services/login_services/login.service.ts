import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    data:any;
    constructor(private http:Http){
        console.log('Login Service Initialized.....');
    }

    getUsers(){
        return this.http.get('/customers/all')
                .map(res => res.json());
    }

    getUser(id){
        return this.http.get('/customers/one/'+id)
                .map(res => res.json());
    }

    authenticateUser(name,password){
        let url = 'http://localhost:4000/customers/login/'+name+'/'+password; 
        return this.http.get(url)
                .map( res=> res.json() ); 
                
    }

    addCustomer(newCustomer){
        let url = 'http://localhost:8080/customers/customer';
        var headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.post(url, newCustomer, {headers: headers})
                   .map(res => res.json());
                    
    }

}