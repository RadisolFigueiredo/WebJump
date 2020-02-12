import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';


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
      (this.product = ((items as any).shoes.map(sapatos => sapatos)))
    ));
  }
}
