import {RouterModule, Routes} from "@angular/router";
import {ViewClientComponent} from "./view-client/view-client.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../_helpers/auth.guard";
import {ClientAssetsComponent} from "./client-assets/client-assets.component";
import {HtmltestComponent} from "./htmltest/htmltest.component";


const clientRoutesModule: Routes = [

  {path: 'add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'view', component: ViewClientComponent, canActivate: [AuthGuard]},
  {path: 'admin-url', component: ClientAssetsComponent, canActivate: [AuthGuard]},
  {path: 'test', component: HtmltestComponent, canActivate: [AuthGuard]}

  // {path: 'add', component: AddClientComponent},
  // {path: 'view', component: ViewClientComponent},
  // {path: 'admin-url', component: ClientAssetsComponent},
  // {path: 'test', component: HtmltestComponent}

];

@NgModule({

  imports: [RouterModule.forChild(clientRoutesModule)],
  exports: [RouterModule]
})

export class ClientRoutes {
}
