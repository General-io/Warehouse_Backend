import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(employees : Employee[], searchValue: string): Employee[] {

    if(!employees || !searchValue){
      return employees;
    }

//    return employees.filter(employee => 
//      employee.firstname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
 
    return employees.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  
    }

}
