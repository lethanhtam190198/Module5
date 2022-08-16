import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/list/customer.component';
import { FacilityComponent } from './facility/list/facility.component';
import { HomeComponent } from './home/home.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';


const routes: Routes = [{
  path: 'facility/list',
  component: FacilityComponent
}];

const home: Routes = [{
  path: 'home',
  component: HomeComponent
}];

const customer: Routes = [{
  path: 'customer/list',
  component: CustomerComponent
}];

const facilityedit: Routes = [{
  path: 'facility/edit',
  component: FacilityEditComponent
}];

const facilitycreate: Routes = [{
  path: 'facility/create',
  component: FacilityCreateComponent
}];

const contractlist: Routes = [{
  path: 'contract',
  component: ContractListComponent
}];

const customercreate: Routes = [{
  path: 'customer/create',
  component: CustomerCreateComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    FacilityComponent,
    ContractListComponent,
    FacilityEditComponent,
    HomeComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(home),
    RouterModule.forRoot(customer),
    RouterModule.forRoot(facilityedit),
    RouterModule.forRoot(facilitycreate),
    RouterModule.forRoot(contractlist),
    RouterModule.forRoot(customercreate)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
