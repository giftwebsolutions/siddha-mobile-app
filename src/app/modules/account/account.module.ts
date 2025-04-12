import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';

const routes: Routes = [
   
    {
      path: '',
      component: MyprofileComponent
    },
    {
      path: '',
      component: MyaddressComponent
    },


];
@NgModule({
  declarations: [
     MyprofileComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class AccountModule { }
