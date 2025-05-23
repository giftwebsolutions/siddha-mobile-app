import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { IonicModule } from '@ionic/angular';
import { LayoutModule } from '../../components/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  }
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent,PasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
})
export class AuthModule { }
