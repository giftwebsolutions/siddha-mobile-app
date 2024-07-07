import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../modules/auth/services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private token:string | null | undefined = null;
  /**
   *
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _authenticationService: AuthenticationService) {}

  /**
   * Add auth header with jwt if user is logged in and request is to api url
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this._authenticationService.currentUserValue;
     /* this._authenticationService.token?.subscribe(res => {
        this.token = res;
     }); */

     this.token = window.localStorage.getItem('token') || null;
     //console.log(this.token);

    const isLoggedIn = currentUser && this.token;
    
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      //console.log('jwt token intercepted');
      request = request.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${this.token}`
        }
      });
    }
    return next.handle(request);
  }
}