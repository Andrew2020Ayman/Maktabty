import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    private formatErrors(error: any) {
        return throwError(error.error);
      }

      get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, { params })
          .pipe(catchError(this.formatErrors));
        } 

      
      
       getHead(path: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {

        return this.http.get(`${environment.api_url}${path}`, {headers: headers} )
          .pipe(catchError(this.formatErrors));
      }

      post(path: string, body: Object): Observable<any> {

        return this.http.post(
          `${environment.api_url}${path}`,
          body
        ).pipe(catchError(this.formatErrors));
      }

      delete(path): Observable<any> {
        return this.http.delete(
          `${environment.api_url}${path}`
        ).pipe(catchError(this.formatErrors));
      }
      
}