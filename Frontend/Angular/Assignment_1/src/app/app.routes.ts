// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home'; // Make sure you have these components
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio'; // Generate if not exists: ng g c portfolio
import { Contact } from './contact/contact'; // Generate if not exists: ng g c contact
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound } // Optional: A 404 page
];
