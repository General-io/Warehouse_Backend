import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthorizService {

  constructor(private http:HttpClient) { }

  getAuthToken(name, pwd) {
    return this.http.post('http:/localhost:8080/api/login',{"name":name, "pwd":pwd})
    .toPromise()
    .then(function(res){
      return res.json()
    })
  }
}
