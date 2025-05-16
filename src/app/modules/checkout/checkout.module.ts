import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { CheckoutComponent } from './checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { CompleteComponent } from './complete/complete.component';
import { EditComponent } from './edit/edit.component';

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
    {
      path: 'edit',
      component: EditComponent
    },




];
@NgModule({
  declarations: [
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    CompleteComponent,
    EditComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class CheckoutModule { }
