import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getProfile(): Observable<any> {
        return this.http.get(`${this.apiUrl}/v1/customer/get`).pipe(
            catchError(err => throwError(() => err))
        );
    }

    updateProfile(data: any): Observable<any> {
        const formData = new FormData();

        formData.append('_method', 'PUT');
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('gender', data.gender);
        formData.append('date_of_birth', data.date_of_birth);
        formData.append('phone', data.phone);
        formData.append('email', data.email);

        if (data.current_password) {
            formData.append('current_password', data.current_password);
        }
        if (data.new_password) {
            formData.append('new_password', data.new_password);
        }
        if (data.new_password_confirmation) {
            formData.append('new_password_confirmation', data.new_password_confirmation);
        }
        if (data.subscribed_to_news_letter !== undefined) {
            formData.append('subscribed_to_news_letter', data.subscribed_to_news_letter ? '1' : '0');
        }
        if (data.image) {
            formData.append('image[]', data.image);
        }

        return this.http.post(`${this.apiUrl}/customer/profile`, formData).pipe(
            catchError(err => throwError(() => err))
        );
    }
}