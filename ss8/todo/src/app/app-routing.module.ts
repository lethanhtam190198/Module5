import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './toto/toto.component';


const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
