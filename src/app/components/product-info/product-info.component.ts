import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product | null = null;

  mainPrice: number | undefined;
  realPrice?: number | undefined;
  discount?: number | undefined;

  ngOnInit(): void {
    if (this.product?.isSaleOff && this.product) {
      this.mainPrice = this.product.saleOffPrice;
      this.realPrice = this.product.price;

      if (this.product.saleOffPrice) {
        this.discount = ((this.product.saleOffPrice * 100) / this.product.price) / 100;
        console.log(this.discount)
      }
    } else {
      this.mainPrice = this.product?.price;
    }
  }
  // @Input() brand?: string = "";
  // @Input() productTitle: string = "";
  // @Input() productDescription: string = "";
  // @Input() price: number = 0;
  // @Input() isOff: boolean = false;
  // @Input() isOffPrice?: number = 0;
}
