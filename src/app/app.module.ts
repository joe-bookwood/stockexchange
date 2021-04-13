import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KrakenService } from './kraken.service';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CryptoChartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [KrakenService]
})
export class AppModule { }
