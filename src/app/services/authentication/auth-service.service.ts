import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../interface/user";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {API_URL} from "../../app.constants";


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const  CONTENT_TYPE = 'application/json';
export const  ACCESS_CONTROL_ALLOW_ORIGIN = '*';
export const  ORIGIN = 'http://localhost:4200';
export const  ACCESS_CONTROL_ALLOW_METHODS = 'PUT, DELETE, POST, GET, OPTIONS';
export const  ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  // url = "http://localhost:8080/authenticate";
  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
  };

  userCreds: User;
  private authCall: Observable<any>;

  public authenticate(data){
    this.userCreds={username: data.userName, password: data.password}
     this.authCall = this.httpClient.post<any>( `${API_URL}`,
                                     this.userCreds,
                                      this.httpOptions)
      .pipe(

            tap(data => console.log('inside authentication service method')),
            tap(data => console.log(data.toString())),
            map( data => {

            sessionStorage.setItem(AUTHENTICATED_USER, data.userName);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
      }
      ));

    return this.authCall

  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(public message:string) { }
}
