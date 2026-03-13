import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div class="col-span-1 md:col-span-1">
            <a routerLink="/" class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <mat-icon class="text-sm">handyman</mat-icon>
              </div>
              <span class="font-display font-bold text-lg tracking-tight text-gray-900">LocalArtisan</span>
            </a>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Connecting you with trusted local artisans and repair professionals for all your home needs.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors"><mat-icon>facebook</mat-icon></a>
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors"><mat-icon>camera_alt</mat-icon></a>
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors"><mat-icon>alternate_email</mat-icon></a>
            </div>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Customers</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">How it works</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Find a professional</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Trust & Safety</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Artisans</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Become a Pro</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Success stories</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Pro Resources</a></li>
              <li><a routerLink="/dashboard" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Pro Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Company</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">About us</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Careers</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-gray-500 hover:text-primary-600 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">© 2026 Local Artisan & Repair Services. All rights reserved.</p>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <mat-icon class="text-red-500 text-sm">favorite</mat-icon>
            <span>for local communities</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
