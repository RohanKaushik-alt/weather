import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherForecastPageRoutingModule } from './weather-forecast-routing.module';

import { WeatherForecastPage } from './weather-forecast.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherForecastPageRoutingModule,
    HttpClientModule
  ],
  declarations: [WeatherForecastPage]
})
export class WeatherForecastPageModule {}
