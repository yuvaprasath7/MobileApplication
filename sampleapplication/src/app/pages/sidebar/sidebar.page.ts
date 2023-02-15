import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {
  selected = 'English';

  constructor(private menu: MenuController, public translate: TranslateService) {
    translate.addLangs(['English', 'Hindi', 'Tamil', 'Bangla']);
  }
  ngOnInit() {
  }

  changeLang() {
    this.translate.use(this.selected);
  }
}
