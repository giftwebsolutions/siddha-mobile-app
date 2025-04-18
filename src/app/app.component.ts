import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  public appPages = [
    { title: 'All Home', url: '/home', icon: 'home' },
    { title: 'All Categories', url: '/categories', icon: 'albums' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'clipboard' },
    { title: 'Orders', url: '/orders', icon: 'file-tray-stacked' },
    { title: 'WishList', url: '/folder/trash', icon: 'heart' },
    { title: 'Offers', url: '/folder/spam', icon: 'diamond' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    console.log(this.appPages);
  }
}
