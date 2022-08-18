import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FacilityComponent} from './facility/list/facility.component';
import {CustomerComponent} from './customer/list/customer.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'facility/list', component: FacilityComponent},
    {path: 'customer/list', component: CustomerComponent},
    {path: 'facility/edit', component: FacilityEditComponent},
    {path: 'facility/create', component: FacilityCreateComponent},
    {path: 'contract/list', component: ContractListComponent},
    {path: 'customer/create', component: CustomerCreateComponent},
    {path: 'customer/edit/:id', component: CustomerEditComponent},
    {path: 'contract/create', component: ContractCreateComponent}
  ]
;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
