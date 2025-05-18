import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {
  private api = `${environment.apiUrl}/customer/cart`;

  constructor(private http: HttpClient) { }

  getCart(): Observable<any> {
    return this.http.get(this.api).pipe(catchError(this.handleError));
  }

  addToCart(payload: { product_id: number; qty: number }): Observable<any> {
    return this.http.post(`${this.api}/add`, payload).pipe(catchError(this.handleError));
  }

  updateQty(payload: { cart_item_id: number; qty: number }): Observable<any> {
    return this.http.put(`${this.api}/update`, payload).pipe(catchError(this.handleError));
  }

  removeItem(itemId: number): Observable<any> {
    return this.http.delete(`${this.api}/remove/${itemId}`).pipe(catchError(this.handleError));
  }

  clearCart(): Observable<any> {
    return this.http.delete(`${this.api}/clear`).pipe(catchError(this.handleError));
  }

  private handleError(err: any) {
    console.error('Cart API Error:', err);
    return throwError(() => err);
  }
}
