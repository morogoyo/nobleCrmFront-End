import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LeadsService} from "../../services/leads/leads.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-leads',
  templateUrl: './update-leads.component.html',
  styleUrls: ['./update-leads.component.css']
})
export class UpdateLeadsComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: LeadsService, private router: Router) {
  }

  title = "Add Leads";

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
    currentMortgage: [''],
    sellTiming: [''],
    vacant: [''],
    sellReason: [''],
    delinquentRent: [''],
    whoPaysForUtilities: [''],
    vacantProperties: [''],
    managementCompany: [''],
    unitCount: [''],
    leaseType: [''],
    meteredUtilities: [''],
    ownershipLength: [''],
    taxes: [''],
    insurance: [''],
    unitMix: [''],
    freeAndClearProperty: [''],
    deferredMaintenance: [''],
    ownerFinancing: ['']



  });

  testVariable = [];

  onClickUpdateLead() {
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
