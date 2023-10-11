import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '5147b82f7cb3ef8dff2910e14e9ed334';
  private currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private baseUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string) {
    const url = `${this.currentWeatherUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeatherForecast(city: string) {
    const url = `${this.forecastUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  getWeatherByLocation(latitude: number, longitude: number) {
    const url = `${this.baseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
