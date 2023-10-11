import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentWeatherPageRoutingModule } from './current-weather-routing.module';

import { CurrentWeatherPage } from './current-weather.page';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentWeatherPageRoutingModule,
    HttpClientModule

  ],
  declarations: [CurrentWeatherPage],
  providers:[Geolocation]
})
export class CurrentWeatherPageModule {}
