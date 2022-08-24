import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from '../customer/list/customer.component';
import {CustomerCreateComponent} from '../customer/customer-create/customer-create.component';
import {CustomerEditComponent} from '../customer/customer-edit/customer-edit.component';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
