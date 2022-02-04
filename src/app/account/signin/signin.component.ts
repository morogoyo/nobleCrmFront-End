import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router } from "@angular/router";
import {AuthService} from "../../services/authentication/auth-service.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
      // this.authService.logout();
  }

  public loginForm: FormGroup = this.fb.group({
    userName: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required])]
  });


  onSubmit() {
    // this.router.navigate(["/"]);
  }

  onClickSubmitAuthorization() {
    // console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(d => {
          this.router.navigate(["dashboard/view"]).then();
          console.log('User LoggedIn');

        },
        error => { console.log(error)
        },
        () => {}
      );

  }



}
