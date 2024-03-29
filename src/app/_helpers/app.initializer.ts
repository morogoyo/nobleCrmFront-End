import { AuthService } from "../services/authentication/auth-service.service";


export function appInitializer(authenticationService: AuthService) {
  return () => new Promise(resolve => {
    // attempt to refresh token on app start up to auto authenticate
    authenticationService.refreshToken()
      .subscribe()
      .add(resolve);
  });
}
