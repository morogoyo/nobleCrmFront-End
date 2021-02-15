import {RouterModule, Routes} from "@angular/router";
import {ViewClientComponent} from "./view-client/view-client.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../_helpers/auth.guard";


const clientRoutesModule: Routes = [

  {path: 'add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'view', component: ViewClientComponent, canActivate: [AuthGuard]}
];

@NgModule({

  imports: [RouterModule.forChild(clientRoutesModule)],
  exports: [RouterModule]
})

export class ClientRoutes {
}
