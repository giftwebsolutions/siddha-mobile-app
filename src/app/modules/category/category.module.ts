import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: ':id',
    component: ListComponent
  }
];
@NgModule({
  declarations: [
    CategoryComponent,
    SubcategoryComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class CategoryModule { }
