import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-calcas',
  templateUrl: './calcas.component.html',
  styleUrls: ['./calcas.component.scss']
})
export class CalcasComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.listProducts().subscribe(items => (
      (this.product = ((items as any).pants.map(calcas => calcas))
      )));
  }
}
