import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError, Observable } from 'rxjs';
import { PaginatedResponse } from '../core/models/response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getHomePage(): Observable<[]> {
    const url = `${environment.apiUrl}/home`;
    return this.http.get<PaginatedResponse<[]>>(url).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMsg =
      error.error?.message ||
      (error.status === 0
        ? 'Network error, please check your connection.'
        : 'Server error occurred. Try again later.');
    console.error('[CategoryService Error]:', errorMsg);
    return throwError(() => new Error(errorMsg));
  }
}
