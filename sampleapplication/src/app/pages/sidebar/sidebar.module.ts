import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarPageRoutingModule } from './sidebar-routing.module';

import { SidebarPage } from './sidebar.page';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TravelComponent } from "../../dashboardcomponent/travel/travel.component";
import { StayComponent } from 'src/app/dashboardcomponent/stay/stay.component';
import { EventComponent } from 'src/app/dashboardcomponent/event/event.component';
import { SupportComponent } from 'src/app/dashboardcomponent/support/support.component';
import { TabPageModule } from '../tab/tab.module';


@NgModule({
    declarations: [SidebarPage,TravelComponent,StayComponent,EventComponent,SupportComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SidebarPageRoutingModule,
        TranslateModule,
        TabPageModule
    ]
})
export class SidebarPageModule {
}
