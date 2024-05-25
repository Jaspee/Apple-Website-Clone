import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purchase-page',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './purchase-page.component.html',
  styleUrl: './purchase-page.component.css'
})
export class PurchasePageComponent {
  screenSize = "14-inch";
  greyColor = "grey";
  productArr = ["grey", "grey", "grey", "grey", "grey", "grey"];
  productChipArr = [true, true, true, true, true, true, true, true, true, true];
  chipFilter = "All"

  displayScreenSize(inches: string) {
    this.screenSize = inches;
  }

  displayProductColor(index: number, color: string): void {
    this.productArr[index] = color;    
  }

  displayChip(filter: string):void {
    
    this.chipFilter = filter;
    if (filter == "All") {
      for (let i = 0; i < 10; i++) {
        this.productChipArr[i] = true;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.productChipArr[i] = false;
      }
      if (filter == "M3") {
        this.productChipArr[0] = true;
        this.productChipArr[1] = true;
        this.productChipArr[2] = true;      
      } else if (filter == "M3 Pro") {
        this.productChipArr[3] = true;
        this.productChipArr[4] = true;
        this.productChipArr[6] = true;
        this.productChipArr[7] = true;
      } else if (filter == "M3 Max") {
        this.productChipArr[5] = true;
        this.productChipArr[8] = true;
        this.productChipArr[9] = true;        
      }
    }
}
}
