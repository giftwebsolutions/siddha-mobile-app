import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { CmsComponent } from './cms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [
   
    {
      path: '',
      component: CmsComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'faq',
      component: FaqComponent
    },
    {
      path: 'notfound',
      component: NotfoundComponent
    },


];
@NgModule({
  declarations: [
    CmsComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    NotfoundComponent


  ],
  imports: [
    CommonModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class CmsModule { }
