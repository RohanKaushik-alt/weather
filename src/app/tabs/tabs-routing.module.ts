import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'current-weather',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../current-weather/current-weather.module').then(
                (m) => m.CurrentWeatherPageModule
              ),
          },
        ],
      },
      {
        path: 'weather-forecast',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../weather-forecast/weather-forecast.module').then(
                (m) => m.WeatherForecastPageModule
              ),
          },
        ],
      },
      
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
