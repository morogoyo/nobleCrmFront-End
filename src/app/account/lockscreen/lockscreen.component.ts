import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-lockscreen",
  templateUrl: "./lockscreen.component.html",
  styleUrls: ["./lockscreen.component.scss"]
})
export class LockscreenComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.router.navigate(["/"]);
  }
}
