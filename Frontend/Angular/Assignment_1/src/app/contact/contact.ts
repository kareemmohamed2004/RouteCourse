import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPassword: string = '';

  // Logic for handling the form submission would go here.
}
