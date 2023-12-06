import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../iproducts';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.css'
})
export class MenuDetailsComponent implements OnInit {
  id: number = 0;
  product!: Iproducts;

  constructor(private route:ActivatedRoute, private cartService : CartService){

  }

  AddItem(){
    alert("Item successfully added to cart!")
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = product[this.id];
  }
}
