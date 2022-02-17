import { DashboardComponent } from "./dashboard.component";
import { Routes } from "@angular/router";
import {SigninComponent} from "../account/signin/signin.component";
import {AuthGuard} from "../_helpers/auth.guard";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: {heading: "Asshole you are a fucking asshole" },
    children: [
      {
        path: "client",
        loadChildren: () =>
          import("../client/client.module").then(m => m.ClientModule)
      },
      {
        path: "leads",
        loadChildren: () =>
          import("../leads/leads.module").then(m => m.LeadsModule)
      }
      ]
  },

];
