import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private  REST_API_SERVER = "http://localhost:8080/client"
  private uri: string;

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept' })
  };


  constructor(private httpClient: HttpClient) { }

  public getClients(){
    this.uri = "/all"
    return this.httpClient.get(this.REST_API_SERVER+this.uri,this.httpOptions);
  }

  // public updateClient(){
  //   return this.httpClient.put(this.REST_API_SERVER,)
  // }

}
