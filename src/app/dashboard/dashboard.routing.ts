import { DashboardComponent } from "./dashboard.component";
import { Routes } from "@angular/router";
import {SigninComponent} from "../account/signin/signin.component";
import {AuthGuard} from "../_helpers/auth.guard";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      heading: "Dashboard"
    },
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../client/client.module").then(m => m.ClientModule)
      }
      ]
  }
];
