import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = `${environment.apiUrl}products`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Product[]>(this.apiUrl)
    .pipe(
      tap(console.log)
    );
  }
}
