import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productTshirt: Product[];
  productPants: Product[];
  productShoes: Product[];


  constructor(private service: ProductsService, private router: Router,
  ) { }

  ngOnInit() {
    this.service.listProducts().subscribe(items => {

      (this.productTshirt = ((items as any).tshirts.map(camisetas => camisetas).slice(0, 3))
      );

      (this.productPants = ((items as any).pants.map(calcas => calcas).slice(0, 3))
      );

      (this.productShoes = ((items as any).shoes.map(sapatos => sapatos).slice(0, 3))
      );
    });

  }

}
