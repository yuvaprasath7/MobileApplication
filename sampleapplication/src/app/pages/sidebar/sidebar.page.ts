import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {
  dark = false;
  selected = 'English';

  constructor(private menu: MenuController,private renderer: Renderer2,public translate: TranslateService ) {
    translate.addLangs(['English', 'Hindi', 'Tamil', 'Bangla']);
  }
  ngOnInit() {
  }
  changeLang() {
    this.translate.use(this.selected);
  }
  // onToggleColorTheme(event: any) {
  //   console.log(event.detail.checked)

  //   if (event.detail.checked) {
  //     this.renderer.setAttribute(document.body, 'color-theme', 'dark');
  //   } else {
  //     this.renderer.setAttribute(document.body, 'color-theme', 'light');
  //   }

  // }
}
