import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { element } from 'protractor';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.list().subscribe(items => (this.product = (items.tshirts.map(camisetas => camisetas).concat(items.shoes, items.pants)))
    );
    console.log(this.product);
  }

}
