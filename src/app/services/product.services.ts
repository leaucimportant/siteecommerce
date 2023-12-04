import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProduct$(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/articles/${id}`);
  }
}
