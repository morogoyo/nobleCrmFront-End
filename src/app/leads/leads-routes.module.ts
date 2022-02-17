import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {AddLeadsComponent} from "./add-leads/add-leads.component";
import {ClientModule} from "../client/client.module";


const leadsRoutModule: Routes = [

      {path: 'leads', component: AddLeadsComponent}
      // {path: 'add-leads', component: AddLeadsComponent},
      // {path: 'add-leads', component: AddLeadsComponent},
      // {path: 'add-leads', component: AddLeadsComponent}

  ];

@NgModule({

  imports: [RouterModule.forChild(leadsRoutModule)],
  exports: [RouterModule]
})

export class LeadsRoutes {
}
