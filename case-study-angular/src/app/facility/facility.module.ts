import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityComponent} from './list/facility.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
