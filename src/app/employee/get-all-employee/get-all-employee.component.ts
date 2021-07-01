import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppserviceService } from '../../appservice.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-get-all-employee',
  templateUrl: './get-all-employee.component.html',
  styleUrls: ['./get-all-employee.component.scss']
})
export class GetAllEmployeeComponent implements OnInit {

  employees : Employee[] | undefined;
  searchValue: string;

  constructor(private appService: AppserviceService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.appService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }

  status: string;

  deleteById(id : number) {
    this.appService.deleteEmployeeById(id).subscribe(() => {this.fetchData();});
  }

  fetchData() {
    this.appService.getAllEmployee().subscribe(data =>{
        this.employees = data;
    });
  } 

  updateEmployee(id : number) {
    this.cookieService.set('idToUpdate', id.toString());
  }


}
