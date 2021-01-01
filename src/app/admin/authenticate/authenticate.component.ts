import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/authentication/auth-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: []
})
export class AuthenticateComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    // fname: [''],
    // lname: [''],
    userName: [''],
    password: [''],
    // streetAddress: [''],
    // city: [''],
    // state: [''],
    // zipcode: [''],
    // dateOfBirth: [''],
    // gender: [''],
    // email: ['']
  });

  testVariable = [];

  onClickSubmitAuthorization() {
    // console.warn(this.loginForm.value);
    this.httpService.authenticate(this.loginForm.value)
      .subscribe(d => {
        console.log('LoggedIn User');
        //todo need to figure out where to redirect this call
          this.router.navigate(['/client/view'])
        },
            error => { console.log(error)
        },
        () => {}
      );

  }

  ngOnInit() {
  }

}
