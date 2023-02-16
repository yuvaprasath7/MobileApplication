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

  constructor(private menu: MenuController,private renderer: Renderer2 ) {
  }
  ngOnInit() {
  }
  onToggleColorTheme(event: any) {
    console.log(event.detail.checked)

    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }

  }
}
