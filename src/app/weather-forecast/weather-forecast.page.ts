import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: 'weather-forecast.page.html',
  styleUrls: ['weather-forecast.page.scss'],
})
export class WeatherForecastPage {
  city: string = '';
  forecastData: any; // Store weather forecast data
  error: string = ''; // Store error messages

  constructor(private weatherService: WeatherService) {}

  searchWeatherForecast() {
    this.weatherService.getWeatherForecast(this.city).subscribe(
      (data: any) => {
        this.forecastData = data;
        this.error = ''; // Clear any previous error message
      },
      (error) => {
        this.error = 'City not found or network issue. Please try again.';
        this.forecastData = null; // Clear forecast data in case of an error
      }
    );
  }
  
  
}
