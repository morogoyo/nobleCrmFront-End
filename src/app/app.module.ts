import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpJWTInterceptorService} from "./services/httpInterceptor/http-jwt-interceptor.service";


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
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpJWTInterceptorService, multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
