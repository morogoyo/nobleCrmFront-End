import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../interface/client";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {REST_API_SERVER} from "../../app.constants";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  CONTENT_TYPE,
  ORIGIN
} from "../authentication/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {


  constructor(private httpClient: HttpClient) { }

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

  public getLeads(): Observable<any> {

    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri + "/all" , this.httpOptions);
    // return Observable.create();  // only for testing a return

  }

  public addLeads(data): Observable<Client> {

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

    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri + "/add" , this.client, this.httpOptions);




  }
}
