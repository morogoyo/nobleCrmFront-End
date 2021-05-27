import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: ClientService, private router: Router) {
  }

  insertClient = this.fb.group({
    fname: [''],
    lname: [''],
    userName: [''],
    passWord: [''],
    streetAddress: [''],
    city: [''],
    state: [''],
    zipcode: [''],
    dateOfBirth: [''],
    gender: [''],
    email: ['']
  });

  testVariable = [];

  onClickSubmitClientData() {
    console.warn(this.insertClient.value);
    this.httpService.addClient(this.insertClient.value)
      .subscribe(d => {
          console.log('Added new User');
          //todo need to figure out where to redirect this call
          this.router.navigate(['/error/500'])
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
