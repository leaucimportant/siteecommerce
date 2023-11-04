import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent {
  @Input() product: Product | null = null;

  selected: number = 0;

  selectImage(index: number): void {
    this.selected = index;
  }
}
