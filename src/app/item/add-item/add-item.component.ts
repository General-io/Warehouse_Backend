import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';
import { ItemserviceService } from 'src/app/itemservice.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item : Item = new Item;
  error : boolean = false;
  errorMessage: string ="";
  loading: boolean = false;

  constructor(private itemservice: ItemserviceService) { }

  ngOnInit(): void {
  }

  onSubmitTemplateBased(data){

    this.item.quantity = data.quantity;
    this.item.brand = data.brand;
    this.item.category = data.category;
    this.item.model = data.model;
    this.item.productCondition = data.condition;
    this.item.storageRack = data.storageRack;
    this.item.floorNumber = data.floorNumber;
    this.item.placeNumber = data.placeNumber;
    this.item.storageRack = data.storageRack;
    this.item.skuCode = data.skuCode;

    this.itemservice.addItem(this.item).toPromise().then(
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
