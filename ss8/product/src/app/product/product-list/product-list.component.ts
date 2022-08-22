import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  id: number;
  name: string;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }

  openDetele(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAll();
      this.router.navigate(['']);
    });
  }
}
