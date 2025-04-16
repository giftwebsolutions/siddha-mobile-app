import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError, Observable } from 'rxjs';
import { PaginatedResponse } from '../../core/models/response';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(page: number = 1): Observable<any> {
    const url = `${environment.apiUrl}/products?page=${page}`;
    return this.http.get<PaginatedResponse<[]>>(url).pipe(
      map((response) => response),
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
