import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IDepartment } from './Department';

@Injectable()
export class DepartmentService {

  private _url: string = "/assets/Data/Departments.json";

  constructor(private http:HttpClient) { }

  getDepartments(): Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this._url)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}