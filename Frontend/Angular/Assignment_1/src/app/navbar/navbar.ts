// src/app/navbar/navbar.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // A property to track the scroll state
  isScrolled: boolean = false;

  // Listen for the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the vertical scroll position is greater than 50px
    // You can adjust this value to your preference
    this.isScrolled = window.scrollY > 50;
  }
}
