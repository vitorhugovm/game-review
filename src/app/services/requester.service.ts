import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  responseType: 'json' as const
};

@Injectable()
export class RequesterService {

  baseUrl: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url, httpOptions).pipe(
      retry(2),
      catchError(error => { return error })
    );
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(this.baseUrl + url, body, httpOptions).pipe(
      retry(2),
      catchError(error => { return error })
    );
  }

  delete(url: any): Observable<any> {
    return this.http.delete(this.baseUrl + url, httpOptions).pipe(
      retry(2),
      catchError(error => { return error })
    );
  }

  update(url: string, body: any): Observable<any> {
    return this.http.put(this.baseUrl + url, body, httpOptions).pipe(
      retry(2),
      catchError(error => { return error })
    );
  }

}
