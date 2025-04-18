import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainCategoryComponent } from './main-category/main-category.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../components/layout/layout.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BestOffersComponent } from './components/best-offers/best-offers.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoryComponent } from './components/category/category.component';
import { NewArraivalComponent } from './components/new-arraival/new-arraival.component';
import { OfferBannerComponent } from './components/offer-banner/offer-banner.component';
import { ShopByBrandsComponent } from './components/shop-by-brands/shop-by-brands.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    MainCategoryComponent,
    HomeComponent,
    BestOffersComponent,
    BestSellingComponent,
    SliderComponent,
    CategoryComponent,
    NewArraivalComponent,
    OfferBannerComponent,
    ShopByBrandsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
