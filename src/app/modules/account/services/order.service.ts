import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getOrders(): Observable<{ data: Order[] }> {
        return this.http.get<{ data: Order[] }>(`${this.apiUrl}/v1/customer/orders`).pipe(
            catchError(err => throwError(() => err))
        );
    }

    getOrder(id: number): Observable<{ data: Order }> {
        return this.http.get<{ data: Order }>(`${this.apiUrl}/v1/customer/orders/${id}`).pipe(
            catchError(err => throwError(() => err))
        );
    }

    cancelOrder(id: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/v1/customer/orders/${id}/cancel`, {}).pipe(
            catchError(err => throwError(() => err))
        );
    }

    reorder(id: number): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/orders/${id}/reorder`, {}).pipe(
            catchError(err => throwError(() => err))
        );
    }
}
