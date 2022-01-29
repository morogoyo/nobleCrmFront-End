import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { HttpJWTInterceptorService } from "../httpInterceptor/http-jwt-interceptor.service";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  CONTENT_TYPE,
  ORIGIN
} from "../authentication/auth-service.service";
import {REST_API_SERVER} from "../../app.constants";
import { Client } from "../../interface/client";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',

})
export class ClientService {

  //todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = `${REST_API_SERVER}`;
  private uri: string;
  private client: { fname: any; userInfo: { zip: any; gender: any; streetAddress: any; city: any; dateOfBirth: any; state: any };
    clientAssets: { email: any; id: any; adminURL: any; siteURL: any; services: any }; lname: any; password: any; role: any; passwordConfirm: any; email: any; username: any };



  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
  };

  constructor(private httpClient: HttpClient, private httpIntercept: HttpJWTInterceptorService, private router: Router) {

  }



  public getClients(): Observable<any> {

    this.uri = "/client/all"

    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpOptions);
      // return Observable.create();  // only for testing a return

  }

  public addClient(data): Observable<Client> {

    this.client = {
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      clientAssets: {
        email: data.email,
        id: data.id,
        adminURL: data.adminURL,
        siteURL: data.siteURL,
        services: data.services
      },

      email: data.email,
      role: data.role


    }

    console.log(this.client.toString())


      this.uri = "/client/add"
      return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri, this.client, this.httpOptions);




  }
}
