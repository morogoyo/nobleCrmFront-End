import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../../interface/client";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {REST_API_SERVER} from "../../app.constants";
import {
  ACCESS_CONTROL_ALLOW_HEADERS,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  CONTENT_TYPE,
  ORIGIN
} from "../authentication/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {


  constructor(private httpClient: HttpClient) { }

  //todo need to figure out how to pass in headers dont have clear example
  // long time since I have done it

  private REST_API_SERVER = `${REST_API_SERVER}`;
  private uri = "/leads";
  private client: Client;
  private toDelete: any;



  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': CONTENT_TYPE,
      'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
      'Origin': ORIGIN,
      'Access-Control-Allow-Methods': ACCESS_CONTROL_ALLOW_METHODS,
      'Access-Control-Allow-Headers': ACCESS_CONTROL_ALLOW_HEADERS })
  };

  public getLeads(): Observable<any> {

    //
    return this.httpClient.get<any>(this.REST_API_SERVER + this.uri + "/all" , this.httpOptions);
    // return Observable.create();  // only for testing a return

  }

  public addLeads(data): Observable<Client> {
      /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
       *  'continuation' concatenation intead of creating a new property for it.
       */
    this.client = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: '',
      passwordConfirm: '',
      role: '',
      username: '',
      clientAssets:{},
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      propertyDetails:{
        ownerName: data.lname,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent
      }
    }
    console.log(this.client.toString())
    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri + "/add" , this.client, this.httpOptions);
  }

  public updateLeads(data): Observable<Client> {
    /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
     *  'continuation' concatenation instead of creating a new property for it.
     */
    this.client = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: '',
      passwordConfirm: '',
      role: '',
      username: '',
      clientAssets:{},
      userInfo: {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender
      },
      propertyDetails:{
        ownerName: data.lname,
        ownerMailingAddress: data.ownerMailingAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfBathrooms: data.numberOfBathrooms,
        aproxSqFt: data.aproxSqFt,
        lotSizeSqFt: data.lotSizeSqFt,
        yearBuilt: data.yearBuilt,
        houseType: data.houseType,
        estimatedValue: data.estimatedValue,
        mortgageAmount: data.mortgageAmount,
        mortgageDate: data.mortgageDate,
        taxAssessedYear: data.taxAssessedYear,
        taxAssessedValue: data.taxAssessedValue,
        taxBilledAmount: data.taxBilledAmount,
        lastSoldDate: data.lastSoldDate,
        lastSoldPrice: data.lastSoldPrice,
        priorSaleDate: data.priorSaleDate,
        priorSalePrice: data.priorSalePrice,
        isGarage: data.isGarage,
        isBasement: data.isBasement,
        expectedSalesPrice: data.expectedSalesPrice,
        allCashSellingPrice: data.allCashSellingPrice,
        realEstateAgent: data.realEstateAgent,
        sellTiming: data.sellTiming,
        vacant: data.vacant,
        sellReason: data.sellReason,
        delinquentRent: data.delinquentRent
      }
    }
    console.log(this.client.toString())
    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri + "/update" , this.client, this.httpOptions);
  }

  public deleteLead(data): Observable<Client> {
    /* TODO: Need to fix first name issue on property details. issue is that I am not able to use the full name
     *  'continuation' concatenation instead of creating a new property for it.
     */
    this.toDelete = {
      email: data.email
    }
    console.log(this.client.toString())
    return this.httpClient.post<Client>(this.REST_API_SERVER + this.uri + "/update" , this.client, this.httpOptions);
  }
}
