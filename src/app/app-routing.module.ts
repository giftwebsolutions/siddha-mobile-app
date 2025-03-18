import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'categories', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
  }
  ,
  {
    path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
