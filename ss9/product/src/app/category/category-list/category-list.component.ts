import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  name: string;
  id: number;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = value;
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getAll();
    });
  }
}
