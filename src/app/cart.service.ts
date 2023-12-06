import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count:number = 0;
  cartItems: Iproducts[]=[];
  constructor() { }

  addToCart(product: Iproducts){
    if(!this.cartItems.includes(product)){
      this.cartItems.push(product);
    }  else {
      product.qtty ++;
    }
    this.count ++
  }
  
  getCart(){
    return this.cartItems.slice();
  }

  deleteItem(id : number){
    this.cartItems.splice(id, 1)
    this.count --
  }

  calcsubTotal(): number {
    let subtotal: number = 0;
    this.cartItems.forEach(product=>{
    subtotal = subtotal + (product.price * product.qtty);
    })
    return subtotal
  }
}
