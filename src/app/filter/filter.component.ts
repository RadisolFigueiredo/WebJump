import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categoria: Categoria[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.listItems().subscribe(item => this.categoria = (item.map(categoria => categoria))
    );
  }

}
