import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/authenticate";
  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept' })
  };

  userCreds: User;

  public authenticate(data){
    this.userCreds={username: data.userName, password: data.password}
    return this.httpClient.post(this.url,this.userCreds,this.httpOptions);

  }
}
