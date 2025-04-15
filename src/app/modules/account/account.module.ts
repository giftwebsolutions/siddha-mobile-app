import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
   
    {
      path: '',
      component: MyprofileComponent
    },
    {
      path: 'myaddress',
      component: MyaddressComponent
    },
    {
      path: 'orderlist',
      component: OrderlistComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
    },


];
@NgModule({
  declarations: [
     MyprofileComponent,
     MyaddressComponent,
     OrderlistComponent,
     WishlistComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class AccountModule { }
