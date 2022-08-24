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


// const routes: Routes = [
//     // {path: '', component: HomeComponent}
//     // {path: 'facility/list', component: FacilityComponent},
//     // {path: 'customer/list', component: CustomerComponent},
//     // {path: 'facility/edit/:id', component: FacilityEditComponent},
//     // {path: 'facility/create', component: FacilityCreateComponent},
//     // {path: 'contract/list', component: ContractListComponent},
//     // {path: 'customer/create', component: CustomerCreateComponent},
//     // {path: 'customer/edit/:id', component: CustomerEditComponent},
//     // {path: 'contract/create', component: ContractCreateComponent}
//   ]
// ;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
