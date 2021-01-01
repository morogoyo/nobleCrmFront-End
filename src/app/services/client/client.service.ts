import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpJWTInterceptorService} from "../httpInterceptor/http-jwt-interceptor.service";

@Injectable({
  providedIn: 'root',

})
export class ClientService {

  //todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = "http://localhost:8080"
  private uri: string;


  constructor(private httpClient: HttpClient, private httpIntercept: HttpJWTInterceptorService) {
  }



  public getClients(): Observable<any> {
    console.log(this.httpIntercept.httpOptions);
    this.uri = "/client/all"
    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri);
      // return Observable.create();  // only for testing a return
  }


}
