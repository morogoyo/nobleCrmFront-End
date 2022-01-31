import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from "../services/authentication/auth-service.service";



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.user;
    if (this.authService.getAuthenticatedToken() != "" && this.authService.getAuthenticatedUser() != "") {
      console.log("Auth guard still needs logic")
      return this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });

    }else{
      return this.router.navigate(['/account/signin'], { queryParams: { returnUrl: state.url } });


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
