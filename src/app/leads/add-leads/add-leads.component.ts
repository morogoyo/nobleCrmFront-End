import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ClientService} from "../../services/client/client.service";
import {Router} from "@angular/router";
import {LeadsService} from "../../services/leads/leads.service";

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.css']
})
export class AddLeadsComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: LeadsService, private router: Router) {
  }

  insertClient = this.fb.group({
    fname: [''],
    lname: [''],
    primaryPhoneNumber: [''],
    streetAddress: [''],
    city: [''],
    state: [''],
    zip: [''],
    email: [''],
    leadSource: [''],
    dateCreated: [''],
    market: [''],
    ownerName: [''],
    ownerMailingAddress: [''],
    numberOfBedrooms: [''],
    numberOfBathrooms: [''],
    aproxSqFt: [''],
    lotSizeSqFt: [''],
    yearBuilt: [''],
    houseType: [''],
    estimatedValue: [''],
    mortgageAmount: [''],
    mortgageDate: [''],
    texAssessedYear: [''],
    taxAssessedValue: [''],
    taxBilledAmont: [''],
    lastSoldDate: [''],
    lastSoldPrice: [''],
    priorSaleDate: [''],
    priorSalePrice: [''],
    isGarage: [''],
    isBasement: [''],
    exepectedSalesPrice: [''],
    AllCashSellingPrice: [''],
    realEstateAgent: [''],
    mortgageAmount: [''],
    sellTiming: [''],
    vacant: [''],
    sellReason: [''],
    delinquentRent: [''],

  });

  testVariable = [];

  onClickSubmitClientData() {
    console.warn(this.insertClient.value);
    this.httpService.addClient(this.insertClient.value)
      .subscribe(d => {
          console.log('Added new User');
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
