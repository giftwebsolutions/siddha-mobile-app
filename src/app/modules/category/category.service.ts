import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError, Observable } from 'rxjs';
import { Category } from './models/category.model';
import { PaginatedResponse } from '../../core/models/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategoryList(page: number = 1): Observable<Category[]> {
    const url = `${environment.apiUrl}/categories?page=${page}`;
    return this.http.get<PaginatedResponse<Category[]>>(url).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  getPaginatedCategories(page: number = 1): Observable<PaginatedResponse<Category[]>> {
    const url = `${environment.apiUrl}/categories?page=${page}`;
    return this.http.get<PaginatedResponse<Category[]>>(url).pipe(
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
