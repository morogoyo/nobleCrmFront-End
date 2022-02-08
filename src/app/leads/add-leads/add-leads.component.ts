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

  insertLead = this.fb.group({
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
    taxBilledAmount: [''],
    lastSoldDate: [''],
    lastSoldPrice: [''],
    priorSaleDate: [''],
    priorSalePrice: [''],
    isGarage: [''],
    isBasement: [''],
    expectedSalesPrice: [''],
    AllCashSellingPrice: [''],
    realEstateAgent: [''],
    sellTiming: [''],
    vacant: [''],
    sellReason: [''],
    delinquentRent: [''],

  });

  testVariable = [];

  onClickSubmitClientData() {
    console.warn(this.insertLead.value);
    this.httpService.addLeads(this.insertLead.value)
      .subscribe(d => {
          console.log('Added new Lead');
          //todo need to redirect to the leads view with kanban board.
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
