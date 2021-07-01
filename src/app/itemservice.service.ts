import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http:HttpClient) { }

  getAllItem() : Observable<Item[]>{
    return this.http.get<Item[]>('http://localhost:8080/item/all', {responseType : 'json'});
  }

  getItemById(i : number) :Observable<Item> {
    return this.http.get<Item>('http://localhost:8080/item/' + i);
  }

  addItem(item: Item): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body=JSON.stringify(item);
    console.log(body);
    
    return this.http.post('http://localhost:8080/item/add', body, {headers:headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  changeQuantity(i : number, itemid: number) :Observable<Item> {
    const body=JSON.stringify(itemid);
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put<Item>('http://localhost:8080/item/changeQuantity/' + itemid + "/" + i, body, {headers:headers});
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
    }


  deleteItemById(i : number) :Observable<Item> {
    return this.http.delete<Item>('http://localhost:8080/item/delete/' + i);
  }
}
