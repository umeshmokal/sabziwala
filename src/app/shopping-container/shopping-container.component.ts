import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DataTransferService } from '../data-transfer.service';
import { ShoppingDetailsComponent } from '../shopping-container/shopping-details/shopping-details.component'
@Component({
  selector: 'app-shopping-container',
  templateUrl: './shopping-container.component.html',
  styleUrls: ['./shopping-container.component.css']
})
export class ShoppingContainerComponent implements OnInit {

  count = 0;
  selectedCategory = [];
  selectedItems = [];
  // shoppingItems = {
  //   'all': [
  //     {
  //       id: 1,
  //       name: 'Apples',
  //       count: 0,
  //       price: 200,
  //       image : 'apples.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 2,
  //       name: 'White Bread',
  //       count: 0,
  //       price: 20,
  //       image : 'whitebread.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 3,
  //       name: 'Cinnamon',
  //       count: 0,
  //       price: 20,
  //       image : 'cinnamon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 4,
  //       name: 'Ladyfinger',
  //       count: 0,
  //       price: 50,
  //       image : 'ladyfinger.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 5,
  //       name: 'Tomato',
  //       count: 0,
  //       price: 40,
  //       image : 'tomato.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 6,
  //       name: 'Potato',
  //       count: 0,
  //       price: 30,
  //       image : 'potato.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 7,
  //       name: 'Watermelon',
  //       count: 0,
  //       price: 50,
  //       image : 'watermelon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 8,
  //       name: 'Lemon',
  //       count: 0,
  //       price: 20,
  //       image : 'lemon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 9,
  //       name: 'Turmeric',
  //       count: 0,
  //       price: 30,
  //       image : 'turmeric.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 10,
  //       name: 'Milk',
  //       count: 0,
  //       price: 20,
  //       image : 'milk.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 11,
  //       name: 'Mango',
  //       count: 0,
  //       price: 200,
  //       image : 'mango.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 12,
  //       name: 'Brown Bread',
  //       count: 0,
  //       price: 40,
  //       image : 'brownbread.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 13,
  //       name: 'Coriander',
  //       count: 0,
  //       price: 40,
  //       image : 'coriander.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 14,
  //       name: 'Ginger',
  //       count: 0,
  //       price: 50,
  //       image : 'ginger.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 15,
  //       name: 'Garlic',
  //       count: 0,
  //       price: 100,
  //       image : 'garlic.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 16,
  //       name: 'Butter',
  //       count: 0,
  //       price: 50,
  //       image : 'butter.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 17,
  //       name: 'Curd',
  //       count: 0,
  //       price: 40,
  //       image : 'curd.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 18,
  //       name: 'Corn',
  //       count: 0,
  //       price: 60,
  //       image : 'corn.jpeg',
  //       isHideAddToCart: false
  //     }
  //   ],
  //   'bread': [
  //     {
  //       id: 2,
  //       name: 'White Bread',
  //       count: 0,
  //       price: 20,
  //       image : 'whitebread.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 12,
  //       name: 'Brown Bread',
  //       count: 0,
  //       price: 40,
  //       image : 'brownbread.jpg',
  //       isHideAddToCart: false
  //     },
  //   ],
  //   'dairy': [
  //     {
  //       id: 10,
  //       name: 'Milk',
  //       count: 0,
  //       price: 20,
  //       image : 'milk.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 16,
  //       name: 'Butter',
  //       count: 0,
  //       price: 50,
  //       image : 'butter.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 17,
  //       name: 'Curd',
  //       count: 0,
  //       price: 40,
  //       image : 'curd.jpg',
  //       isHideAddToCart: false
  //     },
  //   ],
  //   'fruits': [
  //     {
  //       id: 1,
  //       name: 'Apples',
  //       count: 0,
  //       price: 200,
  //       image : 'apples.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 7,
  //       name: 'Watermelon',
  //       count: 0,
  //       price: 50,
  //       image : 'watermelon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 11,
  //       name: 'Mango',
  //       count: 0,
  //       price: 200,
  //       image : 'mango.jpg',
  //       isHideAddToCart: false
  //     },
  //   ],
  //   'spices': [
  //     {
  //       id: 3,
  //       name: 'Cinnamon',
  //       count: 0,
  //       price: 20,
  //       image : 'cinnamon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 9,
  //       name: 'Turmeric',
  //       count: 0,
  //       price: 30,
  //       image : 'turmeric.jpeg',
  //       isHideAddToCart: false
  //     },
  //   ],
  //   'vegetables': [
  //     {
  //       id: 4,
  //       name: 'Ladyfinger',
  //       count: 0,
  //       price: 50,
  //       image : 'ladyfinger.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 5,
  //       name: 'Tomato',
  //       count: 0,
  //       price: 40,
  //       image : 'tomato.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 6,
  //       name: 'Potato',
  //       count: 0,
  //       price: 30,
  //       image : 'potato.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 8,
  //       name: 'Lemon',
  //       count: 0,
  //       price: 20,
  //       image : 'lemon.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 13,
  //       name: 'Coriander',
  //       count: 0,
  //       price: 40,
  //       image : 'coriander.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 14,
  //       name: 'Ginger',
  //       count: 0,
  //       price: 50,
  //       image : 'ginger.jpg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 15,
  //       name: 'Garlic',
  //       count: 0,
  //       price: 100,
  //       image : 'garlic.jpeg',
  //       isHideAddToCart: false
  //     },
  //     {
  //       id: 18,
  //       name: 'Corn',
  //       count: 0,
  //       price: 60,
  //       image : 'corn.jpeg',
  //       isHideAddToCart: false
  //     }
  //   ],
  // }
  shoppingItems = [
    {
      id: 1,
      name: 'Apples',
      count: 0,
      price: 200,
      image: 'apples.jpeg',
      isHideAddToCart: false
    },
    {
      id: 2,
      name: 'White Bread',
      count: 0,
      price: 20,
      image: 'whitebread.jpeg',
      isHideAddToCart: false
    },
    {
      id: 3,
      name: 'Cinnamon',
      count: 0,
      price: 20,
      image: 'cinnamon.jpg',
      isHideAddToCart: false
    },
    {
      id: 4,
      name: 'Ladyfinger',
      count: 0,
      price: 50,
      image: 'ladyfinger.jpg',
      isHideAddToCart: false
    },
    {
      id: 5,
      name: 'Tomato',
      count: 0,
      price: 40,
      image: 'tomato.jpeg',
      isHideAddToCart: false
    },
    {
      id: 6,
      name: 'Potato',
      count: 0,
      price: 30,
      image: 'potato.jpeg',
      isHideAddToCart: false
    },
    {
      id: 7,
      name: 'Watermelon',
      count: 0,
      price: 50,
      image: 'watermelon.jpg',
      isHideAddToCart: false
    },
    {
      id: 8,
      name: 'Lemon',
      count: 0,
      price: 20,
      image: 'lemon.jpg',
      isHideAddToCart: false
    },
    {
      id: 9,
      name: 'Turmeric',
      count: 0,
      price: 30,
      image: 'turmeric.jpeg',
      isHideAddToCart: false
    },
    {
      id: 10,
      name: 'Milk',
      count: 0,
      price: 20,
      image: 'milk.jpg',
      isHideAddToCart: false
    },
    {
      id: 11,
      name: 'Mango',
      count: 0,
      price: 200,
      image: 'mango.jpg',
      isHideAddToCart: false
    },
    {
      id: 12,
      name: 'Brown Bread',
      count: 0,
      price: 40,
      image: 'brownbread.jpg',
      isHideAddToCart: false
    },
    {
      id: 13,
      name: 'Coriander',
      count: 0,
      price: 40,
      image: 'coriander.jpg',
      isHideAddToCart: false
    },
    {
      id: 14,
      name: 'Ginger',
      count: 0,
      price: 50,
      image: 'ginger.jpg',
      isHideAddToCart: false
    },
    {
      id: 15,
      name: 'Garlic',
      count: 0,
      price: 100,
      image: 'garlic.jpeg',
      isHideAddToCart: false
    },
    {
      id: 16,
      name: 'Butter',
      count: 0,
      price: 50,
      image: 'butter.jpg',
      isHideAddToCart: false
    },
    {
      id: 17,
      name: 'Curd',
      count: 0,
      price: 40,
      image: 'curd.jpg',
      isHideAddToCart: false
    },
    {
      id: 18,
      name: 'Corn',
      count: 0,
      price: 60,
      image: 'corn.jpeg',
      isHideAddToCart: false
    }
  ]
  isShowModal = false;
  category = '';
  constructor(
    private dataTransferService: DataTransferService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataTransferService.getCountOfItems().subscribe(count => {
      this.count = count;
    });

    this.dataTransferService.getCategoryName().subscribe(category => {
      console.log(category);
      this.category = category;
      this.selectedCategory = this.shoppingItems[category];
    });

    this.dataTransferService.getShoppingDetailsModal().subscribe(isShowModal => {
      console.log(isShowModal);
      this.isShowModal = isShowModal;
      if (this.isShowModal) this.showShoppingDetailsModal();
    });

    this.dataTransferService.getListOfItemsInCart().subscribe(selectedItems => {
      this.selectedItems = selectedItems;
    });
  }

  incrementCount(item) {
    item.count++;
    if (item.count > 0) item.isHideAddToCart = true;
    this.dataTransferService.incrementCountOfItems(this.count);
    const tempMyObj = Object.assign({}, item);
    this.dataTransferService.addToCart(tempMyObj);
  }

  decrementCount(item) {
    item.count--;
    if (item.count === 0) item.isHideAddToCart = false;
    this.dataTransferService.decrementCountOfItems(this.count);
    this.dataTransferService.removeFromCart(item);
  }

  showShoppingDetailsModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';
    dialogConfig.height = '100%';
    dialogConfig.data = this.selectedItems;
    dialogConfig.panelClass = 'custom-dialog-container';
    let dialogRef = this.dialog.open(ShoppingDetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.dataTransferService.toggleShoppingDetailsModal(false);
    });
  }

  ngOnDestroy() {
  }

}
