import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastListsComponent } from './forecast-lists.component';


const routes: Routes = [
  {
    path: '',
    component: ForecastListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastListsRoutingModule { }
