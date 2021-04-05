import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  selectedElements = [];
  constructor() { }
  userName = new BehaviorSubject<any>('');
  countofItems = new BehaviorSubject<number>(0);
  categoryName = new BehaviorSubject<string>('all');
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isShowShoppingDetailsModal = new BehaviorSubject<boolean>(false);
  selectedItems = new BehaviorSubject<any>(null);

  setUsername(username){
    this.userName.next(username);
  }

  getUserName() {
    return this.userName;
  }

  incrementCountOfItems(count) {
    this.countofItems.next(count + 1);
  }

  decrementCountOfItems(count) {
    this.countofItems.next(count - 1);
  }

  getCountOfItems() {
    return this.countofItems;
  }

  changeCategory(categoryName) {
    this.categoryName.next(categoryName);
  }

  getCategoryName() {
    return this.categoryName;
  }

  setLogInStatus(isLoggedIn) {
    this.isLoggedIn.next(isLoggedIn);
  }

  getUserLogInStatus() {
    return this.isLoggedIn;
  }

  toggleShoppingDetailsModal(isShow) {
    this.isShowShoppingDetailsModal.next(isShow);
  }

  getShoppingDetailsModal() {
    return this.isShowShoppingDetailsModal;
  }

  addToCart(item) {
    let check = this.selectedElements.findIndex(ele => ele.id === item.id);
    if(check === -1) {
      this.selectedElements.push(item);
    } else {
      this.selectedElements[check].count++;
    }
    this.selectedItems.next(this.selectedElements);
  }

  removeFromCart(item) {
    let check = this.selectedElements.findIndex(ele => ele.id === item.id);
    if(this.selectedElements[check].count === 1) {
      this.selectedElements.splice(check,1);
    } else {
      this.selectedElements[check].count--;
    }
    this.selectedItems.next(this.selectedElements);
  }

  getListOfItemsInCart() {
    return this.selectedItems;
  }

} 
