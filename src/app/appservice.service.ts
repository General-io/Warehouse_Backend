import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee} from './Employee';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) {}

  getAllEmployee() : Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/employee/all', {responseType : 'json'});
  }

  getEmployeeById(i : number) :Observable<Employee> {
    return this.http.get<Employee>('http://localhost:8080/employee/' + i);
  }

  addEmployee(employee: Employee): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body=JSON.stringify(employee);
    
    return this.http.post('http://localhost:8080/employee/add', body, {headers:headers});
  }

  deleteEmployeeById(i : number) :Observable<Employee> {
    return this.http.delete<Employee>('http://localhost:8080/employee/delete/' + i);
  }

  updateEmployee(employee: Employee): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body=JSON.stringify(employee);
    
    return this.http.put('http://localhost:8080/employee/put/' + employee.id, body, {headers:headers});
  }

}
