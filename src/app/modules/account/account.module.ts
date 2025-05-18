import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddEditAddressComponent } from './myaddress/add-edit-address/add-edit-address.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'myaddress',
    component: MyaddressComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-address',
    component: AddEditAddressComponent,
  },
  {
    path: 'edit-address/:id',
    component: AddEditAddressComponent,
  },
  {
    path: 'orderlist',
    component: OrderlistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    MyprofileComponent,
    MyaddressComponent,
    OrderlistComponent,
    WishlistComponent,
    AccountComponent,
    AddEditAddressComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
})
export class AccountModule { }
