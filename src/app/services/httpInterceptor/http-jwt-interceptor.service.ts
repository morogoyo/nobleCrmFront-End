import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {  ACCESS_CONTROL_ALLOW_HEADERS,
          ACCESS_CONTROL_ALLOW_METHODS,
          ACCESS_CONTROL_ALLOW_ORIGIN, AuthService,
          CONTENT_TYPE,
          ORIGIN
        } from "../authentication/auth-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpJWTInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  httpOptions;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();


    if (token) {
      console.log(token, username)
      req = req.clone({
        setHeaders: {
          "Authorization": token
        }
      })
    }

    return next.handle(req);
  };


}
