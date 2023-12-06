import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{

  products!: Iproducts[];
  subtotal!: number;

  constructor(private cartService: CartService){

  }

  onDeleteItem(id: number){
    this.cartService.deleteItem(id);
    this.products =this.cartService.getCart();
    this.subtotal = this.cartService.calcsubTotal();
  }

  ngOnInit(): void {
    this.subtotal = this.cartService.calcsubTotal();
    this.products = this.cartService.getCart();

  }



}
