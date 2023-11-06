import { Component, OnInit } from '@angular/core';
import { cartProducts } from 'src/app/mock/cart_product_example';
import { CartProduct } from 'src/app/models/Cart_product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mockCartProduct: CartProduct = cartProducts;
  productsQuantity: number = 0;
  cartProducts: CartProduct[] = [];

  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.cartList$.subscribe({
      next: data => {
        this.cartProducts = [...data];
        this.calculateQuantity();
      }
    })

    this.isMenuOpen = false;
    this.isCartOpen = false;
  }

  isMenuOpen: boolean = false;
  isCartOpen: boolean = false;

  calculateQuantity(): void {
    this.productsQuantity = this.cartProducts.reduce(
      (prev, product) => prev + product.quantity,
      0
    );
  }

  deleteInCartProduct(id: number):void {
    this.cartService.deleteInCartProduct(id);
  }

  testt(id: number){
    console.log(id)
  }
}
