import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product.component';

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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
