import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { ShoppingContainerComponent } from '../shopping-container/shopping-container.component'

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit(): void {
  }

  setCurrentCategoryAsActive(e) {
    let elems = document.querySelector(".active");
    if (elems !== null) {
      elems.classList.remove("active");
    }
    e.target.className = "nav-link active";
  }

  updateCategory(categoryName) {
    this.dataTransferService.changeCategory(categoryName);
  }


}
