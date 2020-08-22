import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client/client.service";

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

  clients;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  getWelcomeMessage() {
    this.clientService.getClients().subscribe((data: any[]) => {
      console.log(data);
      this.clients = data;
    })
  }
}
