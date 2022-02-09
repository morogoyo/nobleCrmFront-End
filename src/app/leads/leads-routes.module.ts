import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {AddLeadsComponent} from "./add-leads/add-leads.component";


const clientRoutesModule: Routes = [
  // commented out this is mainly for show and use later
  {path: 'add', component: AddLeadsComponent, canActivate: [AuthGuard]},
  // {path: 'view', component: ViewClientComponent, canActivate: [AuthGuard]},
  // {path: 'admin-url', component: ClientAssetsComponent, canActivate: [AuthGuard]},
  // {path: 'test', component: HtmltestComponent, canActivate: [AuthGuard]}

];

@NgModule({

  imports: [RouterModule.forChild(clientRoutesModule)],
  exports: [RouterModule]
})

export class ClientRoutes {
}
