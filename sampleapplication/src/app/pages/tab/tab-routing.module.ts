import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from 'src/app/dashboardcomponent/event/event.component';
import { StayComponent } from 'src/app/dashboardcomponent/stay/stay.component';
import { SupportComponent } from 'src/app/dashboardcomponent/support/support.component';
import { TravelComponent } from 'src/app/dashboardcomponent/travel/travel.component';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
