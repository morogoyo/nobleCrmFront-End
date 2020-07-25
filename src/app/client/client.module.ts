import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClientComponent} from './add-client/add-client.component';
import {ViewClientComponent} from './view-client/view-client.component';
import {ClientRoutes} from "./client-routes.module";
import {ClientService} from "../services/client/client.service";

@NgModule({
  declarations: [
    AddClientComponent,
    ViewClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutes
  ],
  providers: [
    ClientService
  ]
})

export class ClientModule {
}
