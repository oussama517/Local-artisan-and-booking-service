import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <nav class="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center gap-2 group">
              <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform">
                <mat-icon>handyman</mat-icon>
              </div>
              <span class="font-display font-bold text-xl tracking-tight text-gray-900">LocalArtisan</span>
            </a>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/category" routerLinkActive="text-primary-600 font-medium" [routerLinkActiveOptions]="{exact: false}" class="text-gray-600 hover:text-primary-600 transition-colors">Services</a>
            <a routerLink="/dashboard" routerLinkActive="text-primary-600 font-medium" class="text-gray-600 hover:text-primary-600 transition-colors">For Artisans</a>
            <div class="h-6 w-px bg-gray-200"></div>
            <a routerLink="/login" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Log in</a>
            <a routerLink="/signup" class="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Sign up</a>
          </div>
          
          <div class="flex items-center md:hidden">
            <button class="text-gray-600 hover:text-gray-900 p-2">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
