import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpJWTInterceptorService} from "../httpInterceptor/http-jwt-interceptor.service";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  CONTENT_TYPE,
  ORIGIN
} from "../authentication/auth-service.service";

@Injectable({
  providedIn: 'root',

})
export class ClientService {

  //todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = "http://localhost:8080"
  private uri: string;


  httpOptions1 = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
  };


  constructor(private httpClient: HttpClient, private httpIntercept: HttpJWTInterceptorService) {
  }



  public getClients(): Observable<any> {

    this.uri = "/client/all"

    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpOptions1);
      // return Observable.create();  // only for testing a return

  }


}
