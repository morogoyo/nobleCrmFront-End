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


  private token = sessionStorage.getItem('token');
  private user = sessionStorage.getItem('authenticatedUser');
  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS,
      'Authorization': this.token,
      'User': this.user
    })
  };

  constructor(private httpClient: HttpClient, private httpIntercept: HttpJWTInterceptorService) {

  }



  public getClients(): Observable<any> {
    console.log(this.httpIntercept.httpOptions);
    this.uri = "/client/all"
    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpIntercept.httpOptions);
      // return Observable.create();  // only for testing a return
  }

  public addClient(): Observable<any>{
    return this.httpClient.post<any>(this.REST_API_SERVER + this.uri,this.httpOptions);
  }


}
