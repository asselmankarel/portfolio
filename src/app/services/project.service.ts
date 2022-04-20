import { IProject, IProjectLanguages } from './../project/IProject';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private user = 'asselmankarel';
  private urlProjects = `https://api.github.com/users/${this.user}/repos`;

  constructor(private http: HttpClient) {}

  getGithubProjects(): Observable<IProject[]> {
    return this.http
      .get<[]>(this.urlProjects)
      .pipe(catchError(this.handleError));
  }

  getProjectLanguages(projectName: string): Observable<IProjectLanguages> {
    const urlLanguages = `https://api.github.com/repos/asselmankarel/${projectName}/languages`;
    return this.http.get<{}>(urlLanguages).pipe(catchError(this.handleError));
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
