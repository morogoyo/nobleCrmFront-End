import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../services/authentication/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  templateUrl: 'authenticate.component.html',
  // templateUrl: '../../../assets/Pages.Auth.Login.html',
  styleUrls: ['authenticate.component.css','../../../assets/css/main.css',
              '../../../assets/font/iconsmind-s/css/iconsminds.css',
    '../../../assets/font/simple-line-icons/css/simple-line-icons.css',
     '../../../assets/css/vendor/bootstrap.min.css',
      '../../../assets/css/vendor/bootstrap.rtl.only.min.css',
      '../../../assets/css/vendor/bootstrap-float-label.min.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: AuthServiceService, private router: Router) { }

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
  title = "authenticate";

  onClickSubmitAuthorization() {
    console.warn(this.loginForm.value);
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
