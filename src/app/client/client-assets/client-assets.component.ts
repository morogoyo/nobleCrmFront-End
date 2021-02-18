import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

import {ClientAssestsService} from "../../services/client/client-assests.service";

@Component({
  selector: 'app-client-assets',
  templateUrl: './client-assets.component.html',
  styleUrls: ['./client-assets.component.css']
})
export class ClientAssetsComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: ClientAssestsService, private router: Router) {
  }

  insertAdminUrl = this.fb.group({
    url: [''],
    email: ['']
  });

  testVariable = [];

  onClickSubmitClientData() {
    console.warn(this.insertAdminUrl.value);
    this.httpService.addAdminUrl(this.insertAdminUrl.value)
      .subscribe(d => {
          console.log('Added new Admin URL');
          //todo need to figure out where to redirect this call
          this.router.navigate(['/'])
        },
        error => {
          console.log(error)
        },
        () => {
        }
      );

  }

  ngOnInit(): void {
  }

}
