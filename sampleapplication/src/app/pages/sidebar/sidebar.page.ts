import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {
  dark = false;
  segment:any
  selected = 'English';

  constructor(private menu: MenuController,private renderer: Renderer2,public translate: TranslateService ) {
    translate.addLangs(['English', 'Hindi', 'Tamil', 'Bangla']);
  }
  ngOnInit() {
  }
  changeLang() {
    this.translate.use(this.selected);
  }



}
