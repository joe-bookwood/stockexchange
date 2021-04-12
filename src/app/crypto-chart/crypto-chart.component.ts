import { Component, OnInit } from '@angular/core';
import {KrakenService} from "../kraken.service";
import {KrakenResult} from "../kraken-result";

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {

  private krakenResult: KrakenResult;

  constructor(private krakenService: KrakenService) { }

  ngOnInit() {
  }

  getKrakenTime(): void {
    this.krakenService.getKrakenTime().subscribe(krakenResult => this.krakenResult = krakenResult);
  }


}
