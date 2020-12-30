// import axios from 'axios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }

  public getRate() {
    return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`);
  }


  public getMarketPrice() {
    var marketPrice = this.http.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    return marketPrice

  }


  public getConfirmedTransactions() {
    var confirmedTransactions = this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true`)
    return confirmedTransactions
  }
}




