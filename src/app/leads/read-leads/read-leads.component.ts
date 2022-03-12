import {Component, OnInit} from '@angular/core';
import {LeadsService} from "../../services/leads/leads.service";

@Component({
  selector: 'app-read-leads',
  templateUrl: './read-leads.component.html',
  styleUrls: ['./read-leads.component.css']
})
export class ReadLeadsComponent implements OnInit {

  constructor(private leadService: LeadsService) {
  }

  leads: any;

  ngOnInit(): void {
    this.getAllLeads();
  }

  getAllLeads() {
    this.leadService.getLeads().subscribe((data) => {
      console.log(data);
      this.leads = data;
    })
  }
}
