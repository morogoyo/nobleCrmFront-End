import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeadsComponent } from './add-leads/add-leads.component';
import { DeleteLeadsComponent } from './delete-leads/delete-leads.component';
import { UpdateLeadsComponent } from './update-leads/update-leads.component';
import { ReadLeadsComponent } from './read-leads/read-leads.component';
import {LeadsRoutes} from "./leads-routes.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddLeadsComponent,
    DeleteLeadsComponent,
    UpdateLeadsComponent,
    ReadLeadsComponent
  ],
    imports: [
        CommonModule,
        LeadsRoutes,
        ReactiveFormsModule,

    ]
})

export class LeadsModule {

}
