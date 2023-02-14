import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end')
  }

  openCustome() {
    this.menu.enable(true, 'custome');
    this.menu.open('custom');
  }
}
