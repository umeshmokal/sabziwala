import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { DataTransferService } from '../data-transfer.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isLogin = false;
  userName; 
  count = 0;
  getUserName$ :Subscription; 
  getCountOfItems$ : Subscription;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  constructor(
    private router:Router,
    private dataTransferService : DataTransferService
    ) 
  { 
    this.getUserName$ = this.dataTransferService.getUserName().subscribe(username => {
      if(username) {
        console.log(username);
        this.userName = username;
        this.isLogin = true;
      }
    });
    this.getCountOfItems$ = this.dataTransferService.getCountOfItems().subscribe(count => {
      console.log("header " + count);
      this.count = count;
  });
   }

  ngOnInit(): void {
    
  }
  goToLogin(isLogin) {
    this.dataTransferService.setLogInStatus(isLogin);
    this.router.navigate(['/login']);
  }

  openShoppingDetailsModal() {
    if(this.count > 0) {
      this.dataTransferService.toggleShoppingDetailsModal(true);
    }
  }

  ngOnDestroy() {
    this.getUserName$.unsubscribe();
    this.getCountOfItems$.unsubscribe();
  }

}
