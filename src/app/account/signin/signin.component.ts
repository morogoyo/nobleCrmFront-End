import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
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
      this.authService.logout();
  }

  public loginForm: FormGroup = this.fb.group({
    userName: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required])]
  });


  // loginForm = this.fb.group({
  //   // fname: [''],
  //   // lname: [''],
  //   userName: [''],
  //   password: [''],
  //   // streetAddress: [''],
  //   // city: [''],
  //   // state: [''],
  //   // zipcode: [''],
  //   // dateOfBirth: [''],
  //   // gender: [''],loginForm
  //   // email: ['']
  // });

  onSubmit() {
    this.router.navigate(["/"]);
  }

  onClickSubmitAuthorization() {
    // console.warn(this.loginForm.value);
    this.authService.authenticate(this.loginForm.value)
      .subscribe(d => {
          console.log('User LoggedIn');
          this.router.navigate(["/view"]);
        },
        error => { console.log(error)
        },
        () => {}
      );

  }



}
