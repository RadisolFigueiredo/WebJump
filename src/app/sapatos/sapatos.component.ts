import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-sapatos',
  templateUrl: './sapatos.component.html',
  styleUrls: ['./sapatos.component.scss']
})
export class SapatosComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.listProducts().subscribe(items => (
      (this.product = (items.shoes.map(sapatos => sapatos)))
    ));
  }
}
