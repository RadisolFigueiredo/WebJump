import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.listProducts().subscribe(items => (this.product = ((items as any).tshirts.map(camisetas => camisetas).concat((items as any).shoes, (items as any).pants)))
    );
  }

}
