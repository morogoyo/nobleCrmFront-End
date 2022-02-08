import { AdminLayoutComponent } from "./core";
import { AuthLayoutComponent } from "./core";
import { Routes } from "@angular/router";
import {SigninComponent} from "./account/signin/signin.component";
import {AuthGuard} from "./_helpers/auth.guard";


export const AppRoutes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule),
        canActivate: [AuthGuard]


      },
      {
        path: "docs",
        loadChildren: () => import("./docs/docs.module").then(m => m.DocsModule)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "account",
        loadChildren: () =>
          import("./account/account.module").then(m => m.AccountModule)
      },
      {
        path: "error",
        loadChildren: () =>
          import("./error/error.module").then(m => m.ErrorModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "error/404"
  }
];
