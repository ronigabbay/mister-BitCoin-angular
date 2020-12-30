import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './../../services/bitcoinService';
import * as moment from 'moment';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  marketPrice = null
  confirmedTransactions = null

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.loadMarketPrice()
    this.loadConfirmedTransactions()

  }

  loadMarketPrice() {
    this.bitcoinService.getMarketPrice().subscribe((marketPrice: any) => {
      this.marketPrice = this.convertData(marketPrice)
      // this.marketPrice = marketPrice.values
      // console.log(this.marketPrice);
    })
  }

  loadConfirmedTransactions() {
    this.bitcoinService.getConfirmedTransactions().subscribe((confirmedTransactions: any) => {
      this.confirmedTransactions = this.convertData(confirmedTransactions)
      // console.log(confirmedTransactions.values);
      // this.confirmedTransactions = confirmedTransactions.values
    })

  }

  private convertData(data) {
    console.log(data);
    
    const newData = data.values.slice(130, 150)
    const convertData = newData.map(value => {
      // console.log(value.y);
      // const newDate = new Date(value.y * 140000000)
      const newDate = new Date()
      // console.log(newDate);
      // let date = moment(newDate).format('YYYY-MM-DD')
      // return [date, value.x]
      return [value.y, value.x]
    })
    return convertData
  }

}
