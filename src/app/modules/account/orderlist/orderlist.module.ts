import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderlist.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../../components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: OrderlistComponent
  }
];



@NgModule({
  declarations: [
    OrderlistComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderlistModule { }
