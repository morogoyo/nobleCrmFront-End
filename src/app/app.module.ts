import {
  AccordionAnchorDirective,
  AccordionDirective,
  AccordionLinkDirective,
  AdminLayoutComponent,
  AuthLayoutComponent,
  FooterComponent,
  HeaderComponent,
  MenuComponent,
  SidebarComponent
} from "./core";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {TokenizeResult} from "@angular/compiler/src/ml_parser/lexer";
import { HttpJWTInterceptorService } from './services/httpInterceptor/http-jwt-interceptor.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    NgbModule,
    MatSidenavModule
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpJWTInterceptorService,
    multi: true
  }]
})
export class AppModule {}
