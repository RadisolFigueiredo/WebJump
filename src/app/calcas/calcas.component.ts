import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-calcas',
  templateUrl: './calcas.component.html',
  styleUrls: ['./calcas.component.scss']
})
export class CalcasComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.list().subscribe(items => (
      (this.product = (items.pants.map(calcas => calcas))
      )));
  }
}
