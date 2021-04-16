import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { DataTransferService } from 'src/app/data-transfer.service';
@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit, OnDestroy {
  selectedItems = [];
  total = 0;
  count = 0;
  getCountOfItems$ : Subscription;
  constructor(
        private dialogRef: MatDialogRef<ShoppingDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private dataTransferService : DataTransferService
  ) 
  {
    this.selectedItems = data;
    this.calculateTotal();
  }

  ngOnInit(): void {
    console.log(this.selectedItems);

    this.getCountOfItems$ = this.dataTransferService.getCountOfItems().subscribe(count => {
      this.count = count;
    });
  }

  close() {
    this.dialogRef.close();
  }
  
  calculateTotal() {
    this.selectedItems.forEach(item => this.total = this.total + (item.count * item.price));
  }
  
  incrementCount(item) {
    item.count++;
    if (item.count > 0) item.isHideAddToCart = true;
    this.total = this.total + item.price;
    this.dataTransferService.incrementCountOfItems(this.count);
  }

  decrementCount(item) {
    item.count--;
    if (item.count === 0) item.isHideAddToCart = false;
    this.total = this.total - item.price;
    let check = this.selectedItems.findIndex(ele => ele.id === item.id);
    if(this.selectedItems[check].count === 0) {
      this.selectedItems.splice(check,1);
    }
    if(this.total === 0) 
    this.close();
    this.dataTransferService.decrementCountOfItems(this.count);
  }

  placeOrder() {
    this.selectedItems.forEach(item => {
      item.count = 0;
      item.isHideAddToCart = false;
    });
    this.selectedItems.splice(0,this.selectedItems.length);
    this.dataTransferService.decrementCountOfItems(1);
    this.close();
    alert("Your order is placed");
    this.close();
  }

  ngOnDestroy() {
    this.getCountOfItems$.unsubscribe();
  }

}
