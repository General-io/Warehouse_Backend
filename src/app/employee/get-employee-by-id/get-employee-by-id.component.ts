import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../appservice.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-get-employee-by-id',
  templateUrl: './get-employee-by-id.component.html',
  styleUrls: ['./get-employee-by-id.component.scss']
})
export class GetEmployeeByIdComponent implements OnInit {

  employee : Employee | undefined;
  exists = false;

  constructor(private appService: AppserviceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(datas){

    this.appService.getEmployeeById(datas).subscribe(data => {
      this.employee = data;
    });

    if(this.employee != null) {
      console.log("was hier");
      
      this.exists = true;
    }else this.exists = false;
  }
}
