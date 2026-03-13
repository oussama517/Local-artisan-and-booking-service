import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header & Search -->
        <div class="mb-10" #headerSection>
          <h1 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Find Professionals</h1>
          
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
            <div class="flex-1 flex items-center px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all">
              <mat-icon class="text-gray-400 mr-3">search</mat-icon>
              <input type="text" placeholder="Service (e.g. Plumber)" class="bg-transparent border-none outline-none w-full text-gray-700">
            </div>
            <div class="flex-1 flex items-center px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all">
              <mat-icon class="text-gray-400 mr-3">location_on</mat-icon>
              <input type="text" placeholder="Location" value="San Francisco, CA" class="bg-transparent border-none outline-none w-full text-gray-700">
            </div>
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
              Search
            </button>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Filters Sidebar -->
          <div class="w-full lg:w-64 shrink-0" #filtersSection>
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <div class="flex items-center justify-between mb-6">
                <h2 class="font-bold text-gray-900">Filters</h2>
                <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">Reset</button>
              </div>
              
              <!-- Category Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wider">Category</h3>
                <div class="space-y-2">
                  @for (cat of categories; track cat.name) {
                    <label class="flex items-center cursor-pointer group">
                      <input type="checkbox" [checked]="cat.checked" class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500">
                      <span class="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors">{{cat.name}}</span>
                    </label>
                  }
                </div>
              </div>
              
              <!-- Price Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wider">Price Range ($/hr)</h3>
                <input type="range" min="20" max="150" value="80" class="w-full accent-primary-600">
                <div class="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$20</span>
                  <span>$150+</span>
                </div>
              </div>
              
              <!-- Rating Filter -->
              <div class="mb-6">
                <h3 class="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wider">Minimum Rating</h3>
                <div class="space-y-2">
                  @for (rating of [4.5, 4.0, 3.5]; track rating) {
                    <label class="flex items-center cursor-pointer group">
                      <input type="radio" name="rating" [checked]="rating === 4.5" class="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-500">
                      <span class="ml-3 flex items-center text-gray-600 group-hover:text-gray-900">
                        {{rating}} <mat-icon class="text-yellow-400 text-[16px] w-[16px] h-[16px] ml-1">star</mat-icon> & up
                      </span>
                    </label>
                  }
                </div>
              </div>
              
              <!-- Availability -->
              <div>
                <h3 class="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wider">Availability</h3>
                <label class="flex items-center cursor-pointer group">
                  <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500">
                  <span class="ml-3 text-gray-600 group-hover:text-gray-900">Available today</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Results Grid -->
          <div class="flex-1" #resultsSection>
            <div class="flex justify-between items-center mb-6">
              <p class="text-gray-600">Showing <span class="font-semibold text-gray-900">24</span> professionals</p>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-500">Sort by:</span>
                <select class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2 outline-none">
                  <option>Recommended</option>
                  <option>Highest Rated</option>
                  <option>Lowest Price</option>
                  <option>Distance</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              @for (artisan of artisans; track artisan.id) {
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover artisan-card flex flex-col h-full">
                  <div class="p-5 flex gap-4">
                    <img [src]="artisan.image" [alt]="artisan.name" class="w-20 h-20 rounded-xl object-cover shadow-sm" referrerpolicy="no-referrer">
                    <div class="flex-1">
                      <div class="flex justify-between items-start">
                        <h3 class="font-bold text-gray-900 text-lg leading-tight">{{artisan.name}}</h3>
                        @if (artisan.verified) {
                          <mat-icon class="text-secondary-500 text-[18px] w-[18px] h-[18px]">verified</mat-icon>
                        }
                      </div>
                      <p class="text-primary-600 font-medium text-sm mb-1">{{artisan.category}}</p>
                      <div class="flex items-center text-sm text-gray-600">
                        <mat-icon class="text-yellow-400 text-[16px] w-[16px] h-[16px] mr-1">star</mat-icon>
                        <span class="font-medium text-gray-900 mr-1">{{artisan.rating}}</span>
                        <span>({{artisan.reviews}})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="px-5 pb-4 flex-1">
                    <p class="text-gray-500 text-sm line-clamp-2 mb-4">{{artisan.bio}}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      @for (skill of artisan.skills; track skill) {
                        <span class="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">{{skill}}</span>
                      }
                    </div>
                  </div>
                  
                  <div class="p-5 border-t border-gray-50 bg-gray-50/50 mt-auto">
                    <div class="flex justify-between items-center mb-4">
                      <div class="flex items-center text-gray-500 text-sm">
                        <mat-icon class="text-[16px] w-[16px] h-[16px] mr-1">location_on</mat-icon>
                        {{artisan.distance}}
                      </div>
                      <div class="font-semibold text-gray-900">\${{artisan.price}}<span class="text-gray-500 font-normal text-sm">/hr</span></div>
                    </div>
                    <button routerLink="/profile" class="w-full bg-white border border-gray-200 hover:border-primary-600 hover:text-primary-600 text-gray-900 font-medium py-2.5 rounded-xl transition-colors text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              }
            </div>
            
            <!-- Pagination -->
            <div class="mt-10 flex justify-center">
              <nav class="flex items-center gap-2">
                <button class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                  <mat-icon>chevron_left</mat-icon>
                </button>
                <button class="w-10 h-10 rounded-xl bg-primary-600 text-white font-medium flex items-center justify-center shadow-sm">1</button>
                <button class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">2</button>
                <button class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors font-medium">3</button>
                <span class="text-gray-500 px-1">...</span>
                <button class="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                  <mat-icon>chevron_right</mat-icon>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CategoryComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('headerSection') headerSection!: ElementRef;
  @ViewChild('filtersSection') filtersSection!: ElementRef;
  @ViewChild('resultsSection') resultsSection!: ElementRef;

  categories = [
    { name: 'Plumbing', checked: true },
    { name: 'Electrical', checked: false },
    { name: 'Carpentry', checked: false },
    { name: 'Painting', checked: false },
    { name: 'Appliance Repair', checked: false },
    { name: 'HVAC', checked: false }
  ];

  artisans = [
    { id: 1, name: 'David Miller', category: 'Master Plumber', rating: 4.9, reviews: 124, distance: '2.4 miles', price: 85, verified: true, image: 'https://picsum.photos/seed/plumber1/200/200', bio: 'Over 15 years of experience in residential and commercial plumbing. Specialized in leak detection and pipe repair.', skills: ['Pipe Repair', 'Water Heaters', 'Drain Cleaning'] },
    { id: 2, name: 'James Wilson', category: 'Plumber', rating: 4.7, reviews: 89, distance: '3.8 miles', price: 70, verified: true, image: 'https://picsum.photos/seed/plumber2/200/200', bio: 'Fast, reliable, and clean plumbing services. Available for emergency calls 24/7.', skills: ['Emergency', 'Installations', 'Repairs'] },
    { id: 3, name: 'Robert Fox', category: 'Plumbing Specialist', rating: 4.8, reviews: 210, distance: '1.5 miles', price: 90, verified: true, image: 'https://picsum.photos/seed/plumber3/200/200', bio: 'Licensed and insured professional. I guarantee all my work for 1 year.', skills: ['Bathroom Remodel', 'Fixtures', 'Piping'] },
    { id: 4, name: 'Alex Johnson', category: 'Plumber', rating: 4.5, reviews: 45, distance: '5.2 miles', price: 65, verified: false, image: 'https://picsum.photos/seed/plumber4/200/200', bio: 'Affordable and honest plumbing services for your everyday household needs.', skills: ['Clogs', 'Leaks', 'Maintenance'] },
    { id: 5, name: 'Thomas Wright', category: 'Master Plumber', rating: 5.0, reviews: 312, distance: '4.1 miles', price: 110, verified: true, image: 'https://picsum.photos/seed/plumber5/200/200', bio: 'Premium plumbing services with top-tier materials and craftsmanship.', skills: ['Commercial', 'High-end Fixtures', 'Gas Lines'] },
    { id: 6, name: 'William Smith', category: 'Plumber', rating: 4.6, reviews: 76, distance: '2.9 miles', price: 75, verified: true, image: 'https://picsum.photos/seed/plumber6/200/200', bio: 'Friendly neighborhood plumber ready to tackle your leaky faucets and clogged drains.', skills: ['General Plumbing', 'Repairs'] }
  ];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const { animate, stagger } = await import('motion');

    animate(
      this.headerSection.nativeElement,
      { opacity: [0, 1], y: [-20, 0] },
      { duration: 0.6, ease: "easeOut" }
    );

    animate(
      this.filtersSection.nativeElement,
      { opacity: [0, 1], x: [-30, 0] },
      { duration: 0.6, ease: "easeOut", delay: 0.2 }
    );

    const cards = this.resultsSection.nativeElement.querySelectorAll('.artisan-card');
    animate(
      cards,
      { opacity: [0, 1], y: [30, 0] },
      { delay: stagger(0.1, { startDelay: 0.3 }), duration: 0.6, ease: "easeOut" }
    );
  }
}
