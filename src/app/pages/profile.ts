import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumbs -->
        <nav class="flex text-sm text-gray-500 mb-6" aria-label="Breadcrumb" #breadcrumb>
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a routerLink="/" class="hover:text-primary-600 transition-colors">Home</a>
            </li>
            <li>
              <div class="flex items-center">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">chevron_right</mat-icon>
                <a routerLink="/category" class="ml-1 hover:text-primary-600 transition-colors">Plumbers</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">chevron_right</mat-icon>
                <span class="ml-1 text-gray-900 font-medium">David Miller</span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8" #mainContent>
            
            <!-- Profile Header Card -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div class="flex flex-col sm:flex-row gap-6 items-start">
                <div class="relative">
                  <img src="https://picsum.photos/seed/plumber1/300/300" alt="David Miller" class="w-32 h-32 rounded-2xl object-cover shadow-md" referrerpolicy="no-referrer">
                  <div class="absolute -bottom-3 -right-3 bg-white p-1 rounded-full shadow-sm">
                    <div class="bg-secondary-50 text-secondary-600 p-1.5 rounded-full">
                      <mat-icon class="text-[20px] w-[20px] h-[20px]">verified</mat-icon>
                    </div>
                  </div>
                </div>
                
                <div class="flex-1">
                  <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-2">
                    <div>
                      <h1 class="text-3xl font-display font-bold text-gray-900 leading-tight">David Miller</h1>
                      <p class="text-primary-600 font-medium text-lg">Master Plumber</p>
                    </div>
                    <div class="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                      <mat-icon class="text-yellow-500">star</mat-icon>
                      <span class="font-bold text-gray-900 text-lg">4.9</span>
                      <span class="text-gray-600 text-sm">(124)</span>
                    </div>
                  </div>
                  
                  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                    <div class="flex items-center">
                      <mat-icon class="text-[18px] w-[18px] h-[18px] mr-1.5 text-gray-400">location_on</mat-icon>
                      San Francisco, CA (2.4m away)
                    </div>
                    <div class="flex items-center">
                      <mat-icon class="text-[18px] w-[18px] h-[18px] mr-1.5 text-gray-400">work_history</mat-icon>
                      15+ years experience
                    </div>
                    <div class="flex items-center">
                      <mat-icon class="text-[18px] w-[18px] h-[18px] mr-1.5 text-gray-400">task_alt</mat-icon>
                      340 jobs completed
                    </div>
                  </div>
                  
                  <div class="flex gap-3">
                    <button class="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                      <mat-icon class="text-[20px] w-[20px] h-[20px]">chat_bubble_outline</mat-icon> Message
                    </button>
                    <button class="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                      <mat-icon class="text-[20px] w-[20px] h-[20px]">share</mat-icon> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- About Section -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 class="text-xl font-bold text-gray-900 mb-4">About Me</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                Hi, I'm David. I've been a licensed plumber in the Bay Area for over 15 years. I specialize in residential plumbing, from simple leak repairs to full bathroom remodels. I pride myself on being punctual, clean, and transparent with my pricing. I'll always explain the problem and the solution before starting any work.
              </p>
              
              <h3 class="font-semibold text-gray-900 mb-3">Skills & Expertise</h3>
              <div class="flex flex-wrap gap-2">
                @for (skill of ['Pipe Repair', 'Water Heaters', 'Drain Cleaning', 'Bathroom Remodel', 'Leak Detection', 'Garbage Disposals']; track skill) {
                  <span class="bg-primary-50 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium">{{skill}}</span>
                }
              </div>
            </div>

            <!-- Reviews Section -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-900">Reviews (124)</h2>
                <button class="text-primary-600 font-medium hover:text-primary-700 text-sm">See all</button>
              </div>
              
              <div class="space-y-6">
                @for (review of reviews; track review.name) {
                  <div class="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div class="flex justify-between items-start mb-2">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                          {{review.name.charAt(0)}}
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 text-sm">{{review.name}}</h4>
                          <p class="text-gray-500 text-xs">{{review.date}}</p>
                        </div>
                      </div>
                      <div class="flex text-yellow-400">
                        @for (star of [1,2,3,4,5]; track star) {
                          <mat-icon class="text-[16px] w-[16px] h-[16px]">{{ star <= review.rating ? 'star' : 'star_border' }}</mat-icon>
                        }
                      </div>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed mt-2">{{review.text}}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Sidebar / Booking Widget -->
          <div class="lg:col-span-1" #bookingWidget>
            <div class="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 sticky top-28">
              <div class="flex justify-between items-end mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p class="text-gray-500 text-sm font-medium mb-1">Starting at</p>
                  <div class="flex items-baseline gap-1">
                    <span class="text-3xl font-bold text-gray-900">$85</span>
                    <span class="text-gray-500">/hour</span>
                  </div>
                </div>
                <div class="bg-secondary-50 text-secondary-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                  Available Today
                </div>
              </div>
              
              <h3 class="font-semibold text-gray-900 mb-4">Select a Service</h3>
              <div class="space-y-3 mb-6">
                <label class="flex items-start p-3 border border-primary-200 bg-primary-50 rounded-xl cursor-pointer transition-colors">
                  <input type="radio" name="service" checked class="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300">
                  <div class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">General Plumbing Repair</span>
                    <span class="block text-xs text-gray-500 mt-0.5">Leaks, clogs, minor fixes. 1 hr min.</span>
                  </div>
                </label>
                <label class="flex items-start p-3 border border-gray-200 hover:border-primary-200 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <input type="radio" name="service" class="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300">
                  <div class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Water Heater Installation</span>
                    <span class="block text-xs text-gray-500 mt-0.5">Fixed price: $350 (labor only)</span>
                  </div>
                </label>
                <label class="flex items-start p-3 border border-gray-200 hover:border-primary-200 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                  <input type="radio" name="service" class="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300">
                  <div class="ml-3">
                    <span class="block text-sm font-medium text-gray-900">Consultation / Estimate</span>
                    <span class="block text-xs text-gray-500 mt-0.5">Free 30-min visit</span>
                  </div>
                </label>
              </div>
              
              <button routerLink="/booking" class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex justify-center items-center gap-2 text-lg">
                Continue to Book <mat-icon>arrow_forward</mat-icon>
              </button>
              
              <p class="text-center text-xs text-gray-500 mt-4">You won't be charged yet</p>
              
              <div class="mt-6 pt-6 border-t border-gray-100">
                <div class="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <mat-icon class="text-secondary-500">verified_user</mat-icon>
                  <span>Background checked</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-600">
                  <mat-icon class="text-primary-500">shield</mat-icon>
                  <span>Covered by LocalArtisan Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('breadcrumb') breadcrumb!: ElementRef;
  @ViewChild('mainContent') mainContent!: ElementRef;
  @ViewChild('bookingWidget') bookingWidget!: ElementRef;

  reviews = [
    { name: 'Emily Thompson', date: 'October 12, 2025', rating: 5, text: 'David was fantastic! He arrived on time, quickly diagnosed the leak under our sink, and had it fixed within an hour. Very professional and left the area cleaner than he found it.' },
    { name: 'Michael Chang', date: 'September 28, 2025', rating: 5, text: 'Installed a new water heater for us. The price was exactly as quoted, no hidden fees. He explained how to maintain it properly. Highly recommend.' },
    { name: 'Jessica Davis', date: 'September 15, 2025', rating: 4, text: 'Good work on clearing a stubborn drain clog. Was a bit late due to traffic but communicated well. Would hire again.' }
  ];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const { animate, stagger } = await import('motion');

    animate(
      this.breadcrumb.nativeElement,
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 0.5, ease: "easeOut" }
    );

    animate(
      this.mainContent.nativeElement.children,
      { opacity: [0, 1], y: [30, 0] },
      { delay: stagger(0.15), duration: 0.7, ease: "easeOut" }
    );

    animate(
      this.bookingWidget.nativeElement,
      { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] },
      { duration: 0.6, ease: "easeOut", delay: 0.3 }
    );
  }
}
