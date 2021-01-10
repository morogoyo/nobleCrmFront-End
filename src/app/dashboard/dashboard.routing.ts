import { DashboardComponent } from "./dashboard.component";
import { Routes } from "@angular/router";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
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
