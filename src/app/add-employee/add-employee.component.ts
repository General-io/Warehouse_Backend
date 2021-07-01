import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AppserviceService } from '../appservice.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee : Employee = new Employee;
  error: boolean = false;
  loading: boolean = false;

  constructor(private appService: AppserviceService) { }

  ngOnInit(): void {
  }

  onSubmitTemplateBased(data){
    
    const rndInt = Math.floor(Math.random() * 100000) + 999999;
    this.employee.employeeId = rndInt;
    this.employee.department = data.department;
    this.employee.firstname = data.firstname;
    this.employee.lastName = data.lastname;
    this.employee.gender = data.gender;
    this.employee.street = data.street;
    this.employee.streetNo = data.streetNumber;
    this.employee.country = data.country;
    this.employee.telephone = data.telephone;
    this.employee.birthday = data.date;
    this.employee.ort = "Hessen"

    this.appService.addEmployee(this.employee).toPromise().then(
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
