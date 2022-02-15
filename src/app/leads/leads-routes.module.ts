import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../_helpers/auth.guard";
import {NgModule} from "@angular/core";
import {AddLeadsComponent} from "./add-leads/add-leads.component";


const LeadsRoutesModule: Routes = [

  {path: 'add-leads', component: AddLeadsComponent},
  // {path: 'add-leads', component: AddLeadsComponent},
  // {path: 'add-leads', component: AddLeadsComponent},
  // {path: 'add-leads', component: AddLeadsComponent}

  ];

@NgModule({

  imports: [RouterModule.forChild(LeadsRoutesModule)],
  exports: [RouterModule]
})

export class LeadsRoutes {
}
