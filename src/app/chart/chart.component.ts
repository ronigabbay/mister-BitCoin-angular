import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  // @Input() confirmedTransactions: any
  // @Input() marketPrice: any
  @Input() data
  @Input() columns: any

  
  constructor() { }
  type = 'LineChart'
  // columns = [1, 4, 5, 7, 3, 10]
  

  ngOnInit(): void {
    // console.log(this.confirmedTransactions);
    // console.log(this.marketPrice);
    console.log('this.data:', this.data)
  }


}
