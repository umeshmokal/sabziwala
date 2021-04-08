import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  constructor() { }
  userName = new BehaviorSubject<any>('');
  countofItems = new BehaviorSubject<number>(0);
  categoryName = new BehaviorSubject<string>('all');
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isShowShoppingDetailsModal = new BehaviorSubject<boolean>(false);

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

} 
