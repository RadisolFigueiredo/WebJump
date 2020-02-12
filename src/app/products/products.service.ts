import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Categoria } from '../filter/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = 'http://localhost:3000/products';
  private readonly apiUrlCateg = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  listItems() {
    return this.http.get<Categoria[]>(this.apiUrlCateg);
  }

}
