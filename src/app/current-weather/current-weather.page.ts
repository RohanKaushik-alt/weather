import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: 'current-weather.page.html',
  styleUrls: ['current-weather.page.scss'],
})
export class CurrentWeatherPage {
  city: string = '';
  weatherData: any;
  error: string = '';
  hasGeolocationPermission: boolean = false;

  constructor(
    private weatherService: WeatherService,

  ) {}

  

  searchWeather() {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.error = ''; // Clear any previous error message
      },
      (error) => {
        this.error = 'City not found or network issue. Please try again.';
        this.weatherData = null; // Clear weather data in case of an error
      }
    );
  }
  
}
