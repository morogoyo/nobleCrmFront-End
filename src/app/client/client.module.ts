import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClientComponent} from './add-client/add-client.component';
import {ViewClientComponent} from './view-client/view-client.component';
import {ClientRoutes} from "./client-routes.module";
import {ClientService} from "../services/client/client.service";
import {ReactiveFormsModule} from "@angular/forms";
import { ClientAssetsComponent } from './client-assets/client-assets.component';
import { HtmltestComponent } from './htmltest/htmltest.component';

@NgModule({
    declarations: [
        AddClientComponent,
        ViewClientComponent,
        ClientAssetsComponent,
        HtmltestComponent,


    ],
  imports: [
    CommonModule,
    ClientRoutes,
    ReactiveFormsModule
  ],
    exports: [
        ViewClientComponent
    ],
    providers: [
        ClientService
    ]

})

export class ClientModule {
}
