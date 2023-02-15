import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidebarPageRoutingModule } from './sidebar-routing.module';

import { SidebarPage } from './sidebar.page';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarPageRoutingModule,
    TranslateModule
  ],
  declarations: [SidebarPage]
})
export class SidebarPageModule {
}
