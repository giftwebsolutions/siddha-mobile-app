import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    // --- LOGIN ---
    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/login`, {
            email,
            password,
            device_name: 'android',
        }, {
            headers: this.getHeaders()
        }).pipe(this.handleError());
    }

    // --- REGISTER ---
    register(data: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/register`, data, {
            headers: this.getHeaders()
        }).pipe(this.handleError());
    }

    // --- FORGOT PASSWORD ---
    forgotPassword(email: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/forgot-password`, { email }, {
            headers: this.getHeaders()
        }).pipe(this.handleError());
    }

    // --- RESET PASSWORD ---
    resetPassword(data: {
        email: string;
        token: string;
        password: string;
        password_confirmation: string;
    }): Observable<any> {
        return this.http.post(`${this.apiUrl}/v1/customer/reset-password`, data, {
            headers: this.getHeaders()
        }).pipe(this.handleError());
    }

    // --- HELPERS ---
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    private handleError() {
        return catchError((error) => {
            let message = 'An unknown error occurred';
            if (error.error?.message) message = error.error.message;
            else if (error.status === 0) message = 'Server not reachable';
            else if (error.status === 422) message = 'Validation failed';
            return throwError(() => ({ status: error.status, message }));
        });
    }
}
