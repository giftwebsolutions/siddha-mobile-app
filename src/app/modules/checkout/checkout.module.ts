import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { CheckoutComponent } from './checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
   
    {
      path: '',
      component: CheckoutComponent
    },
    {
      path: 'address',
      component: AddressComponent
    },
    {
      path: 'payment',
      component: PaymentComponent
    },
    {
      path: 'complete',
      component: CompleteComponent
    },




];
@NgModule({
  declarations: [
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    CompleteComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class checkoutModule { }
