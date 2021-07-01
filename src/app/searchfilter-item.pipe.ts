import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item';

@Pipe({
  name: 'searchfilterItem'
})
export class SearchfilterItemPipe implements PipeTransform {

  transform(item : Item[], searchValue: string): Item[] {

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
