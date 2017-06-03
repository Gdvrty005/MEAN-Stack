import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService{
    constructor(private http:Http){
    }

     getOrders(id){
        return this.http.get('/customers/'+id+'/orders')
                .map(res => res.json());
    }

    getOrderDetails(id){
        return this.http.get('/orders/one/'+id)
                .map(res => res.json());
    }

    addOrders(cartItems){
        let url = 'http://localhost:8080/customers/customer';
        var headers = new Headers();
        headers.append('content-type','application/json');
        return this.http.post(url, cartItems, {headers: headers})
                   .map(res => res.json());
    }
}