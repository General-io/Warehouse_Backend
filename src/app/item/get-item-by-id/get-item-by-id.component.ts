import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { ItemserviceService } from 'src/app/itemservice.service';

@Component({
  selector: 'app-get-item-by-id',
  templateUrl: './get-item-by-id.component.html',
  styleUrls: ['./get-item-by-id.component.scss']
})
export class GetItemByIdComponent implements OnInit {


  item : Item = new Item;
  exists = false;

  constructor(private itemService: ItemserviceService) { }

  ngOnInit(): void {
    
  }

  onSubmit(datas){

    this.itemService.getItemById(datas).subscribe(data => {
      this.item = data;
    });

    if(this.item != null) {     
      this.exists = true;
    }else this.exists = false;
  }

}
