import { Component } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { AppserviceService } from './appservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'warehouse-manager';
  gaga = !false;
  addres= "http://localhost:8080";

  employees : Employee[] | undefined;
  constructor(private appService: AppserviceService) {}


  ngOnInit() {
    this.appService.getAllEmployee().subscribe(data => {
      this.employees = data;
    });
  }


  delete() : void {
    !this.gaga;
  }
  
}
