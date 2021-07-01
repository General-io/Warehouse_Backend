import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppserviceService } from '../../appservice.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  getEmployee: Employee = new Employee;

  cookieValue : string;
  employee : Employee = new Employee;
  error: boolean = false;
  loading: boolean = false;

  constructor(private appService: AppserviceService , private cookieService: CookieService) { }

  ngOnInit(): void {

    this.cookieValue = this.cookieService.get('idToUpdate');

    this.appService.getEmployeeById(Number(this.cookieValue)).subscribe( data => {
      this.employee = data;
    });

    this.cookieService.delete('idToUpdate');
  }


  onSubmitTemplateBased(data){

    
    this.getEmployee.id = this.employee.id;
    this.getEmployee.employeeId = this.employee.employeeId;
    this.getEmployee.department = data.department;
    this.getEmployee.firstname = data.firstname;
    this.getEmployee.lastName = data.lastname;
    this.getEmployee.gender = this.employee.gender;
    this.getEmployee.street = data.street;
    this.getEmployee.streetNo = data.streetNumber;
    this.getEmployee.country = data.country;
    this.getEmployee.telephone = data.telephone;
    this.getEmployee.birthday = data.date;
    this.getEmployee.ort = "Hessen"

    this.appService.updateEmployee(this.getEmployee).toPromise().then(
      data => {
        this.loading = true
        this.error = false;
        
      }
    ).catch(
      error => {
        console.log("fehler")
        this.error = true;
        this.loading = false
      }
    )
  }

}
