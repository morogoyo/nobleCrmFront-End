import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../interface/user";
import {map, tap} from "rxjs/operators";
import {Observable, BehaviorSubject} from "rxjs";
import {API_URL_AUTH, REST_API_SERVER} from "../../app.constants";
import {Router} from "@angular/router";


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';
export const CONTENT_TYPE = 'application/json';
export const ACCESS_CONTROL_ALLOW_ORIGIN = '*';
export const ORIGIN = 'http://localhost:4200';
export const ACCESS_CONTROL_ALLOW_METHODS = 'PUT, DELETE, POST, GET, OPTIONS';
export const ACCESS_CONTROL_ALLOW_HEADERS = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authCall: Observable<any>;
  userCreds: User;


  // url = "http://localhost:8080/authenticate";
  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS
    })
  };

  //////////////////////////////////// new methods from tutorial ////////////////////////////////////


  /////  https://jasonwatmore.com/post/2020/05/22/angular-9-jwt-authentication-with-refresh-tokens#app-initializer-ts

  // THIS IS  TUTORIAL CODE DO NOT USE //
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(data) {
    this.userCreds = {username: data.userName, password: data.password}
    this.authCall = this.http.post<any>(`${API_URL_AUTH}`,
      this.userCreds
      , this.httpOptions)
      .pipe(map(data => {
        localStorage.setItem(AUTHENTICATED_USER, `${data.userName}`);
        localStorage.setItem(TOKEN, `Bearer ${data.token}`);
        this.userSubject.next(data);
        this.startRefreshTokenTimer();
        return data;
      }));

    return this.authCall
  }

  logout() {
    console.log("logging out");
    localStorage.setItem(AUTHENTICATED_USER, "");
    localStorage.setItem(TOKEN, "");
  }

  refreshToken() {
    return this.http.post<any>(`${REST_API_SERVER}/refresh`, {}, {withCredentials: true})
      .pipe(map((user) => {
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      }));
  }

  // helper methods

  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    // const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    // const expires = new Date(jwtToken.exp * 1000);
    // const timeout = expires.getTime() - Date.now() - (60 * 1000);
    // this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }


  getAuthenticatedUser() {
    return localStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return localStorage.getItem(TOKEN)
  }


}

// // private currentUserSubject: BehaviorSubject<User>;
// private userSubject: BehaviorSubject<User>;
// public currentUser: Observable<User>;
// userCreds: User;
// private authCall: Observable<any>;


// // url = "http://localhost:8080/authenticate";
// httpOptions = {
//   // tslint:disable-next-line:max-line-length
//   headers: new HttpHeaders({
//     'Content-Type': CONTENT_TYPE,
//     'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
//     'Origin': ORIGIN,
//     'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
//     'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
// };
//
//
//
// constructor(private httpClient: HttpClient) {
// //  checking to see if user is authorized
//   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('AUTHENTICATED_USER')));
//   this.currentUser = this.currentUserSubject.asObservable();
// }
//
// public get currentUserValue(): User {
//   return this.currentUserSubject.value;
// }
//
// public authenticate(data){
//   this.userCreds={username: data.userName, password: data.password}
//    this.authCall = this.httpClient.post<any>( \`${API_URL_AUTH}\`,
//                                    this.userCreds,
//                                     this.httpOptions)
//     .pipe(
//
//           tap(data => console.log('inside authentication service method')),
//           tap(data => console.log(data.toString())),
//           map( data => {
//           localStorage.setItem(AUTHENTICATED_USER, data.userName);
//           localStorage.setItem(TOKEN, \`Bearer ${data.token}\`);
//           // sessionStorage.setItem(AUTHENTICATED_USER, data.userName);
//           // sessionStorage.setItem(TOKEN, \`Bearer ${data.token}\`);
//           this.currentUserSubject.next(data);
//           return data;
//     }
//     ));
//
//   return this.authCall
//
// }

//
// getAuthenticatedUser() {
//   return localStorage.getItem(AUTHENTICATED_USER)
// }
//
// getAuthenticatedToken() {
//   if(this.getAuthenticatedUser())
//     return localStorage.getItem(TOKEN)
// }
//
// isUserLoggedIn() {
//   let user = localStorage.getItem(AUTHENTICATED_USER)
//   return !(user === null)
// }
//
// logout(){
//   localStorage.removeItem(AUTHENTICATED_USER)
//   localStorage.removeItem(TOKEN)
// }


export class AuthenticationBean {
  constructor(public message: string) {
  }
}

