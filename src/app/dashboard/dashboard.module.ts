import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { RouterModule } from "@angular/router";
import {ClientModule} from "../client/client.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxChartsModule,
    ClientModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
