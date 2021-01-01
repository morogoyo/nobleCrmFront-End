import { Injectable } from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {  ACCESS_CONTROL_ALLOW_HEADERS,
          ACCESS_CONTROL_ALLOW_METHODS,
          ACCESS_CONTROL_ALLOW_ORIGIN, AuthService,
          CONTENT_TYPE,
          ORIGIN
        } from "../authentication/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class HttpJWTInterceptorService implements HttpInterceptor{

  constructor(
    private authService : AuthService
  ) { }

  httpOptions;

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();

    this.httpOptions = {
      // tslint:disable-next-line:max-line-length
      headers: new HttpHeaders({
        'Content-Type': CONTENT_TYPE,
        'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
        'Origin': ORIGIN,
        'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
        'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS,
        'Authorization': token
      })


    };
    if(token ) {
      console.log(token,username)
      req = req.clone({
        headers: this.httpOptions.headers

      })
    }

    return next.handle(req);
    };





}
