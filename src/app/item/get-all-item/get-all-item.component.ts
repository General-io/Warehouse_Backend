import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { ItemserviceService } from 'src/app/itemservice.service';

@Component({
  selector: 'app-get-all-item',
  templateUrl: './get-all-item.component.html',
  styleUrls: ['./get-all-item.component.scss']
})
export class GetAllItemComponent implements OnInit {


  items : Item[];

  constructor(private itemservice: ItemserviceService) { }

  ngOnInit(): void {
    this.itemservice.getAllItem().subscribe(data => {
      this.items = data;
    });
  }

  onSubmitTemplateBased(data, itemid: number){
    console.log(data.quantity);
    this.itemservice.changeQuantity(data.quantity, itemid).subscribe();
  }

  
  deleteById(id : number) {
    this.itemservice.deleteItemById(id).subscribe(() => {this.fetchData();});
  }

  fetchData() {
    this.itemservice.getAllItem().subscribe(data =>{
        this.items = data;
    });
  }
  

  searchValue: string;
  quantity: number;

}
