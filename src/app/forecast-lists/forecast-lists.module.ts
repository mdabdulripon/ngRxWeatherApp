import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastListsRoutingModule } from './forecast-lists-routing.module';
import { ForecastListsComponent } from './forecast-lists.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [ForecastListsComponent],
  imports: [CommonModule, ForecastListsRoutingModule, MaterialModule],
  exports: [ForecastListsComponent]
})
export class ForecastListsModule {}
