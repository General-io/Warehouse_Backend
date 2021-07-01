import { Pipe, PipeTransform } from '@angular/core';
import { Archive } from './Archive';

@Pipe({
  name: 'searchfilterArchive'
})
export class SearchfilterArchivePipe implements PipeTransform {

  transform(item : Archive[], searchValue: string): Archive[] {

    if(!item || !searchValue){
      return item;
    }

//    return employees.filter(employee => 
//      employee.firstname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
 
    return item.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  
    }


}
