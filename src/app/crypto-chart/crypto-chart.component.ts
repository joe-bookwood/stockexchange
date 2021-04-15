import { Component, OnInit } from '@angular/core';
import { KrakenService } from "../kraken.service";
import { KrakenResult } from "../kraken-result";
import { KrakenTime } from '../kraken-time';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {

  private krakenResult: KrakenResult<KrakenTime>;

  constructor(private krakenService: KrakenService) { }

  ngOnInit() {
  }

  getKrakenTime(): void {
    this.krakenService.getKrakenTime().subscribe((response) => {
      this.krakenResult = response;
    }
  }


}
