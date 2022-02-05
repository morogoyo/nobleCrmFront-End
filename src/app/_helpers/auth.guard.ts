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
    if (this.authService.userValue) {
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



// import { Injectable } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { UserService } from './user.service';
//
// @Injectable()
// export class AuthGuardService implements CanActivate {
//
//   constructor(private userService: UserService, private router: Router) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.userService.isValid()) {
//       return true;
//     } else {
//       this.router.navigate(['/login'], {
//         queryParams: {
//           return: state.url
//         }
//       });
//       return false;
//     }
//   }
// }
