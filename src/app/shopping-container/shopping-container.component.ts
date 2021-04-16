import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';
import { ShoppingDetailsComponent } from '../shopping-container/shopping-details/shopping-details.component'
@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css']
})
export class ShoppingContainerComponent implements OnInit, OnDestroy {

  count = 0;
  listOfItems = [];
  selectedItems = [];
  shoppingItems = [
    {
      id: 1,
      name: 'Apples',
      count: 0,
      price: 200,
      image: 'apples.jpeg',
      category: 'fruits',
      isHideAddToCart: false
    },
    {
      id: 2,
      name: 'White Bread',
      count: 0,
      price: 20,
      category: 'bread',
      image: 'whitebread.jpeg',
      isHideAddToCart: false
    },
    {
      id: 3,
      name: 'Cinnamon',
      count: 0,
      price: 20,
      category: 'spices',
      image: 'cinnamon.jpg',
      isHideAddToCart: false
    },
    {
      id: 4,
      name: 'Ladyfinger',
      count: 0,
      price: 50,
      image: 'ladyfinger.jpg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 5,
      name: 'Tomato',
      count: 0,
      price: 40,
      image: 'tomato.jpeg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 6,
      name: 'Potato',
      count: 0,
      price: 30,
      image: 'potato.jpeg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 7,
      name: 'Watermelon',
      count: 0,
      price: 50,
      image: 'watermelon.jpg',
      category: 'fruits',
      isHideAddToCart: false
    },
    {
      id: 8,
      name: 'Lemon',
      count: 0,
      price: 20,
      image: 'lemon.jpg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 9,
      name: 'Turmeric',
      count: 0,
      price: 30,
      image: 'turmeric.jpeg',
      category: 'spices',
      isHideAddToCart: false
    },
    {
      id: 10,
      name: 'Milk',
      count: 0,
      price: 20,
      image: 'milk.jpg',
      category: 'dairy',
      isHideAddToCart: false
    },
    {
      id: 11,
      name: 'Mango',
      count: 0,
      price: 200,
      image: 'mango.jpg',
      category: 'fruits',
      isHideAddToCart: false
    },
    {
      id: 12,
      name: 'Brown Bread',
      count: 0,
      price: 40,
      image: 'brownbread.jpg',
      category: 'bread',
      isHideAddToCart: false
    },
    {
      id: 13,
      name: 'Coriander',
      count: 0,
      price: 40,
      image: 'coriander.jpg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 14,
      name: 'Ginger',
      count: 0,
      price: 50,
      image: 'ginger.jpg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 15,
      name: 'Garlic',
      count: 0,
      price: 100,
      image: 'garlic.jpeg',
      category: 'vegetables',
      isHideAddToCart: false
    },
    {
      id: 16,
      name: 'Butter',
      count: 0,
      price: 50,
      image: 'butter.jpg',
      category: 'dairy',
      isHideAddToCart: false
    },
    {
      id: 17,
      name: 'Curd',
      count: 0,
      price: 40,
      image: 'curd.jpg',
      category: 'dairy',
      isHideAddToCart: false
    },
    {
      id: 18,
      name: 'Corn',
      count: 0,
      price: 60,
      image: 'corn.jpeg',
      category: 'vegetables',
      isHideAddToCart: false
    }
  ]
  isShowModal = false;
  category = '';
  getCountOfItems$ :Subscription;
  getCategoryName$ : Subscription;
  getShoppingDetailsModal$ : Subscription;
  constructor(
    private dataTransferService: DataTransferService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCountOfItems$ = this.dataTransferService.getCountOfItems().subscribe(count => {
      this.count = count;
    });

    this.getCategoryName$ = this.dataTransferService.getCategoryName().subscribe(category => {
      console.log(category);
      this.category = category;
      if(this.category === 'all') {
        this.listOfItems = this.shoppingItems;
      } else {
        this.listOfItems = this.shoppingItems.filter(item =>  item.category === this.category);
      }
    });

    this.getShoppingDetailsModal$ = this.dataTransferService.getShoppingDetailsModal().subscribe(isShowModal => {
      console.log(isShowModal);
      this.isShowModal = isShowModal;
      if (this.isShowModal) this.showShoppingDetailsModal();
    });
  }

  incrementCount(item) {
    item.count++;
    if (item.count > 0) item.isHideAddToCart = true;
    let check = this.selectedItems.findIndex(ele => ele.id === item.id);
    if(check === -1) {
      this.selectedItems.push(item);
    }
    this.dataTransferService.incrementCountOfItems(this.count);
  }

  decrementCount(item) {
    item.count--;
    if (item.count === 0) item.isHideAddToCart = false;
    let check = this.selectedItems.findIndex(ele => ele.id === item.id);
    if(this.selectedItems[check].count === 0) {
      this.selectedItems.splice(check,1);
    }
    this.dataTransferService.decrementCountOfItems(this.count);
  }

  showShoppingDetailsModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';
    dialogConfig.height = '100%';
    dialogConfig.data = this.selectedItems;
    dialogConfig.panelClass = 'custom-dialog-container';
    let dialogRef = this.dialog.open(ShoppingDetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.dataTransferService.toggleShoppingDetailsModal(false);
    });
  }

  ngOnDestroy() {
    this.getCountOfItems$.unsubscribe();
    this.getCategoryName$.unsubscribe();
    this.getShoppingDetailsModal$.unsubscribe();
   }

}
