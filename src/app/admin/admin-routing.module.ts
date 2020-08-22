import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticateComponent} from "./authenticate/authenticate.component";

const adminRoutesModule: Routes = [
  { path: 'auth',  component: AuthenticateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(adminRoutesModule)],
  exports: [RouterModule]
})

export class AdminRoutingModule {

}
