import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductResponse, Product } from './product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Get paginated product list
   */
  getProductListByCategoryId(categoryId: string | null, page: number = 1): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.api}/products/category/${categoryId}?page=${page}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get product by ID
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<{ data: Product }>(`${this.api}/products/${id}`).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

  /**
   * Get related products by ID
   */
  getRelatedProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/products/${id}/related`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMsg =
      error.error?.message ||
      (error.status === 0
        ? 'Network error, please check your connection.'
        : 'Server error occurred. Try again later.');
    console.error('[ProductService Error]:', errorMsg);
    return throwError(() => new Error(errorMsg));
  }
}
