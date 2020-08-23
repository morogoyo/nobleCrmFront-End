import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  AUTHENTICATED_USER,
  CONTENT_TYPE,
  ORIGIN,
  TOKEN
} from "../authentication/auth-service.service";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class ClientService {

  //todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = "http://localhost:8080"
  private uri: string;

  private token = sessionStorage.getItem('token');

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS,
      'Authorization': this.token,
      // 'User': sessionStorage.getItem('username')
    })
  };


  constructor(private httpClient: HttpClient) {
  }

  public testMethod(){
    console.log('These are the headers being passed in');
    console.log(this.httpOptions.headers);
    console.log(ACCESS_CONTROL_ALLOW_HEADERS );
    console.log(ACCESS_CONTROL_ALLOW_METHODS);
    console.log(ACCESS_CONTROL_ALLOW_ORIGIN);
    console.log(AUTHENTICATED_USER);
    console.log(CONTENT_TYPE);
    console.log(ORIGIN);
    console.log(this.token);

  }
  public getClients(): Observable<any> {
    console.log(this.testMethod());
    this.uri = "/client/all"
    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri, this.httpOptions);
      // return Observable.create();  // only for testing a return
  }


}
