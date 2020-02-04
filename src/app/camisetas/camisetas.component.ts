import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.scss']
})
export class CamisetasComponent implements OnInit {

  product: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.listProducts().subscribe(items => (this.product = ((items as any).tshirts.map(camisetas => camisetas)))
    );
  }
}
