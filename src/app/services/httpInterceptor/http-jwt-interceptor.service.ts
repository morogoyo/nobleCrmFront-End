import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {  AuthService  } from "../authentication/auth-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpJWTInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService ) {
  }

  httpOptions;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();


    if (token && username) {
      console.log(token, username)
      const newReq = req.clone({
        setHeaders: {
          "Authorization": token
        }
      });
      return next.handle(newReq); //edited request headers
    }

    return next.handle(req); // non-edited request headers
  };


}
