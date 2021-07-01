import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Archive } from './Archive';

@Injectable({
  providedIn: 'root'
})
export class ArchiveServiceService {

  constructor(private http:HttpClient) { }

  getAllItemFromArchive() : Observable<Archive[]>{
    return this.http.get<Archive[]>('http://localhost:8080/archive/all', {responseType : 'json'});
  }

  getItemById(i : number) :Observable<Archive> {
    return this.http.get<Archive>('http://localhost:8080/item/' + i);
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
    }

}
