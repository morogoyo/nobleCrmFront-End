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
  private client: Client;



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
      userName: data.userName,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      email: data.email

    }

    console.log(this.client.toString())


      this.uri = "/client/add"
      return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri, this.client, this.httpOptions);




  }
}
