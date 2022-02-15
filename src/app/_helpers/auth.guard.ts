import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AUTHENTICATED_USER, AuthService, TOKEN} from "../services/authentication/auth-service.service";



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.user;
    if (this.authService.getAuthenticatedToken()) {
      console.log("Auth guard still needs logic")
      console.log(this.authService.getAuthenticatedUser(), this.authService.getAuthenticatedToken())
      console.log(this.authService.userValue)
      // return this.router.navigate(['client','view'], {queryParams: {returnUrl: state.url}});
          return true
    }else{
      return this.router.navigate(['account','signin'], { queryParams: { returnUrl: state.url } });
    }
  }
}
