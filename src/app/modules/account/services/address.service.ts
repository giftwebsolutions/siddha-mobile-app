import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Address } from '../models/address';

@Injectable({ providedIn: 'root' })
export class AddressService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAddresses(): Observable<{ data: Address[] }> {
        return this.http.get<{ data: Address[] }>(`${this.apiUrl}/v1/customer/addresses`).pipe(
            catchError(err => throwError(() => err))
        );
    }

    getAddress(id: number): Observable<{ data: Address }> {
        return this.http.get<{ data: Address }>(`${this.apiUrl}/v1/customer/addresses/${id}`).pipe(
            catchError(err => throwError(() => err))
        );
    }

    createAddress(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/addresses`, data).pipe(
            catchError(err => throwError(() => err))
        );
    }

    updateAddress(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/v1/customer/addresses/${id}`, data).pipe(
            catchError(err => throwError(() => err))
        );
    }
}