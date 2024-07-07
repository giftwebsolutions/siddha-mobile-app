import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './components/layout/layout.module';
import { JwtInterceptor } from 'src/app/core/interceptors/jwt.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInitService } from './core/services/appinit.services';
import { AppInterceptor } from './core/interceptors/app.interceptor';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule, // Add HttpClientModule here
    HomeModule,
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_INITIALIZER, useFactory: () => addInitFactory, deps: [AppInitService], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function addInitFactory(appInitService: AppInitService) {
  return () => {
    return appInitService.init()
  }
}
