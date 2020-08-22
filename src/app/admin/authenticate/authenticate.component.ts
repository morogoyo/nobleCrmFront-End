import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {


  ////////////////////////////////////////////////////////////////////////////////

  title = 'Angular 4 Project!';
  todaydate;
  componentproperty;
  emailid;
  formdata;

  ////////////////////////////////////////////////////////////////////////////////
  constructor() {
  }

  ngOnInit(): void {

    // this.todaydate = this.myservice.showTodayDate();
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
    });

  }
  login() {
    console.log("testing button");
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
  }


}
