import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientModule,
    ReactiveFormsModule,
    AdminModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
