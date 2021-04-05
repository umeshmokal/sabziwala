import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedInButtonPressed = false;
  users = [];
  constructor(
    private router: Router,
    private dataTransferService: DataTransferService
  ) { }

  ngOnInit(): void {
    this.dataTransferService.getUserLogInStatus().subscribe(isLoggedInButtonPressed => {
      this.isLoggedInButtonPressed = isLoggedInButtonPressed;
    })
  }

  // Actual Logic when we have backend support

  // getData(value) {
  //   console.log(value);
  //   if (this.isLoggedInButtonPressed) {
  //     if (this.users.find(item => item.email === value.email && item.password === value.password)) {
  //       this.dataTransferService.setUsername(value.email);
  //       this.router.navigate(['/categories']);
  //     } else {
  //       alert("Please sign up first");
  //     }
  //   } else {
  //     if (this.users.length === 0) {
  //       let user = {
  //         email: value.email,
  //         password: value.password
  //       }
  //       this.users.push(user);
  //       this.router.navigate(['/header']);
  //     } else {
  //       if (this.users.find(item => item.email === value.email && item.password === value.password)) {
  //         alert("User already exists");
  //       } else {
  //         let user = {
  //           email: value.email,
  //           password: value.password
  //         }
  //         this.users.push(user);
  //         this.router.navigate(['/header']);
  //       }
  //     }
  //   }
  //   // if(value.email === "umeshmokal08@gmail.com" && value.password === "123") {
  //   //   this.dataTransferService.setUsername(value.email);
  //   //   this.router.navigate(['/categories']);
  //   // } else {
  //   //   alert("Fucked Up");
  //   // }
  // }

  getData(value) {
    if(this.isLoggedInButtonPressed) {
      if(value.email && value.password) {
        this.dataTransferService.setUsername(value.email);
        this.router.navigate(['/categories']);
      } 
    } else {
      alert("Signup successfully completed");
      this.router.navigate(['/header']);
    }
    
  }
}
