import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import {ShoppingContainerComponent} from '../shopping-container/shopping-container.component'

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  // @ViewChild('cat') a:ElementRef;
  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
    // this.dataTransferService.getCategoryName().subscribe(category => {

    // })
  }

  // ngAfterViewInit() {
  //   console.log(this.a.nativeElement);
  // }

  updateCategory(categoryName) {
    this.dataTransferService.changeCategory(categoryName);
  }


}
