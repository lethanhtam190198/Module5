import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './list/customer.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: CustomerComponent
  }, {
    path: 'create',
    component: CustomerCreateComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
