import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from 'src/app/dashboardcomponent/event/event.component';
import { StayComponent } from 'src/app/dashboardcomponent/stay/stay.component';
import { SupportComponent } from 'src/app/dashboardcomponent/support/support.component';
import { TravelComponent } from 'src/app/dashboardcomponent/travel/travel.component';
import { UserProfilePageModule } from '../user-profile/user-profile.module';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [
  {
    path: '',
    component: SidebarPage,
    children:[
      {
        path:'event',component:EventComponent
      },
      {
        path:'stay',component:StayComponent
      },
      {
        path:'travel',component:TravelComponent
      },
      {
        path:'Support',component:SupportComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}
