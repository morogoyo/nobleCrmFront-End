import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { RouterModule } from "@angular/router";
import {ClientModule} from "../client/client.module";
import {LeadsModule} from "../leads/leads.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxChartsModule,
    ClientModule,
    LeadsModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
