import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  constructor() {
    this.products$ = this.productService.getProduct$(
      this.route.snapshot.params['id']
    );
  }
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  products$: Observable<Product[]>;
}
