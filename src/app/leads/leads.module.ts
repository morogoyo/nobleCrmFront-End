import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { DeleteLeadsComponent } from './delete-leads/delete-leads.component';
import { UpdateLeadsComponent } from './update-leads/update-leads.component';
import { ReadLeadsComponent } from './read-leads/read-leads.component';
import {LeadsRoutes} from "./leads-routes.module";
import {ReactiveFormsModule} from "@angular/forms";
import { LeadStagingComponent } from './lead-staging/lead-staging.component';
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    AddLeadsComponent,
    DeleteLeadsComponent,
    UpdateLeadsComponent,
    ReadLeadsComponent,
    LeadStagingComponent
  ],
    imports: [
        CommonModule,
        LeadsRoutes,
        ReactiveFormsModule,
        DragDropModule

    ]
})

export class LeadsModule {

}
