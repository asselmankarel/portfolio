import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProject } from '../project/IProject';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = 'https://api.github.com/users/asselmankarel/repos';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProject[]> {
    return this.http.get<[]>(this.url).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
