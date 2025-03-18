import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: ':id',
    component: SubcategoryComponent
  }
];
@NgModule({
  declarations: [
    CategoryComponent,
    SubcategoryComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class CategoryModule { }
