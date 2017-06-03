import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Item } from '../../../Item';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService{
    private cart:Item[]=[];
    public qty: number= 0;
    public rewards: number= 0;
    public totalPrice: number =0;
    totalQuantity: number=0;
    constructor(private http:Http){
        console.log('Cart Service Initialized.....');
    }

    addItem(inv){
         if(inv.discountPercentage==0){
             this.totalPrice += inv.price;
            console.log('No Rewards');
         }if(inv.discountPercentage==20){
            this.rewards += 20; 
            this.totalPrice = this.totalPrice + (inv.price*(100-inv.discountPercentage)/100);
            console.log('20 Rewards');
         } if(inv.discountPercentage==40){
            console.log('40 Rewards');
            this.totalPrice = this.totalPrice + (inv.price*(100-inv.discountPercentage)/100);
            this.rewards += 40;
         } if(inv.discountPercentage==70){
            console.log('70 Rewards');
            this.totalPrice = this.totalPrice + (inv.price*(100-inv.discountPercentage)/100);
            this.rewards += 70;
         }    
         this.cart.push(inv);
         this.totalQuantity = this.qty+1;   
    }

    getQty(){
         return this.cart;  
    }

    getRewards(){
        return this.rewards;
    }

    getTotalPrice(){
         return this.totalPrice;  
    }

    getQuantity(){
         return this.cart.length;  
    }

    clearCart(cartItems){
        this.cart = [];
        this.totalPrice = 0;
    }

    removeItem(cartItem){
        this.cart = this.cart.filter(cart=> cart.id!=cartItem.id);
        this.rewards -= cartItem.discountPercentage;
        if(cartItem.discountPercentage>0){
            this.totalPrice -= (((cartItem.price)*(100-cartItem.discountPercentage))/100)
        }else{
            this.totalPrice -= cartItem.price; 
        }
        
        return this.getQty(); 
    }


}