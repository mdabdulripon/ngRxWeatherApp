import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastListsRoutingModule } from './forecast-lists-routing.module';
import { ForecastListsComponent } from './forecast-lists.component';


@NgModule({
  declarations: [ForecastListsComponent],
  imports: [CommonModule, ForecastListsRoutingModule],
  exports: [ForecastListsComponent]
})
export class ForecastListsModule {}
