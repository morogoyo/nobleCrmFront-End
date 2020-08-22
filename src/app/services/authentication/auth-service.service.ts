import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  url = "localhost:8080/authenticate";

  userCreds: user;

  public authenticate(){
    this.httpClient.post(this.url,this.userCreds)
      .subscribe(() => console.log("authentication service was called"))
  }
}
