import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: ':id',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
