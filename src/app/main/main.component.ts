import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
