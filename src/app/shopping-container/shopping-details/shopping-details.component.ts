import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { DataTransferService } from 'src/app/data-transfer.service';
@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {
  selectedItems = [];
  total = 0;
  count = 0;
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

    this.dataTransferService.getCountOfItems().subscribe(count => {
      this.count = count;
    });
  }

  close() {
    this.dialogRef.close(this.selectedItems);
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
    this.dataTransferService.decrementCountOfItems(this.count);
  }

}
