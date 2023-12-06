import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { product } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor( private cartService : CartService){

  }

  products!: Iproducts[];
  product!:{};

  addItem(product:number){
    alert("Item successfully added to cart!")
    this.cartService.addToCart(this.products[product])
  }

  ngOnInit(): void {
    this.products = product
    this.product = product
  

  }

}
