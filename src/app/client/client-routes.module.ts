import {RouterModule, Routes} from "@angular/router";
import {ViewClientComponent} from "./view-client/view-client.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {NgModule} from "@angular/core";


const clientRoutesModule: Routes = [
  {path: 'view', component: ViewClientComponent},
  {path: 'edit', component: AddClientComponent},
  // { path: 'login', component: AuthenticationComponent }
];

@NgModule({

  imports: [RouterModule.forChild(clientRoutesModule)],
  exports: [RouterModule]
})

export class ClientRoutes {
}
