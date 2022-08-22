import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  id: number;
  name: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  openDetele(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: any) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAll();
  }
}
