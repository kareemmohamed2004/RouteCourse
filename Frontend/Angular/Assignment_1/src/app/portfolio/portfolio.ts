import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  selectedItem: number | null = null;
  
  openModal(item: number) {
    this.selectedItem = item;
  }

  closeModal(event: MouseEvent) {
    this.selectedItem = null;
  }
}