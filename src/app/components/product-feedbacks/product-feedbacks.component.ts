import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-feedbacks',
  templateUrl: './product-feedbacks.component.html',
  styleUrls: ['./product-feedbacks.component.css'],
})
export class ProductFeedbacksComponent {
  @Input() product: Product | null = null;
}
