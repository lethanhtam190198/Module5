import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryListComponent} from './category-list/category-list.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
