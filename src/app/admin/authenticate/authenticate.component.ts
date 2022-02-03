import {Component, OnInit} from '@angular/core';
import {FormBuilder } from "@angular/forms";
import {AuthService} from "../../services/authentication/auth-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-authenticate',
  // templateUrl: 'authenticate.component.html',
  templateUrl: './authenticate.component.html',
  styleUrls: []
})
export class AuthenticateComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: AuthService, private router: Router) { }

  loginForm = this.fb.group({

    userName: [''],
    password: [''],

  });

  testVariable = [];
  title = "authenticate";

  onClickSubmitAuthorization() {
    // console.warn(this.loginForm.value);
    this.httpService.login(this.loginForm.value)
      .subscribe(d => {
        console.log('LoggedIn User');
          this.router.navigate(['/client/view']).then();
        },
            error => { console.log(error)
        },
        () => {}
      );

  }

  ngOnInit() {
  }

}
