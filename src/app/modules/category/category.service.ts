import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, throwError } from 'rxjs';
import { Response } from '../../core/models/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public errors: string[] = [];
  constructor(private http: HttpClient) { }

  getCategoryList() {
    return this.http.get<Response>(`${environment.apiUrl}/categories`)
      .pipe(
        map((response: Response) => {
          console.log(response)
          return response;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      return error.error.message;
    }
    return throwError(error);
  }
}
