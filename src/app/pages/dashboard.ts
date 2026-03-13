import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20 pb-20">
      
      <!-- Dashboard Nav -->
      <div class="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex space-x-8 overflow-x-auto scrollbar-hide">
            <a href="#" class="border-b-2 border-primary-600 text-primary-600 py-4 px-1 font-medium text-sm whitespace-nowrap">Overview</a>
            <a href="#" class="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 font-medium text-sm whitespace-nowrap">Jobs</a>
            <a href="#" class="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 font-medium text-sm whitespace-nowrap">Calendar</a>
            <a href="#" class="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 font-medium text-sm whitespace-nowrap">Earnings</a>
            <a href="#" class="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 font-medium text-sm whitespace-nowrap">Reviews</a>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4" #header>
          <div>
            <h1 class="text-2xl font-display font-bold text-gray-900">Welcome back, David!</h1>
            <p class="text-gray-500">Here's what's happening with your business today.</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-2 text-sm font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-500"></span>
              </span>
              Accepting Jobs
            </span>
            <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
              Update Availability
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" #statsGrid>
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <mat-icon>monetization_on</mat-icon>
              </div>
              <span class="flex items-center text-secondary-600 text-sm font-medium bg-secondary-50 px-2 py-1 rounded-md">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">trending_up</mat-icon> 12%
              </span>
            </div>
            <h3 class="text-gray-500 text-sm font-medium mb-1">Earnings (This Month)</h3>
            <p class="text-2xl font-bold text-gray-900">$3,240.00</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <mat-icon>work</mat-icon>
              </div>
              <span class="flex items-center text-secondary-600 text-sm font-medium bg-secondary-50 px-2 py-1 rounded-md">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">trending_up</mat-icon> 4%
              </span>
            </div>
            <h3 class="text-gray-500 text-sm font-medium mb-1">Completed Jobs</h3>
            <p class="text-2xl font-bold text-gray-900">28</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <mat-icon>star</mat-icon>
              </div>
              <span class="flex items-center text-gray-500 text-sm font-medium bg-gray-50 px-2 py-1 rounded-md">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">trending_flat</mat-icon> 0%
              </span>
            </div>
            <h3 class="text-gray-500 text-sm font-medium mb-1">Average Rating</h3>
            <p class="text-2xl font-bold text-gray-900">4.9</p>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-4">
              <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <mat-icon>visibility</mat-icon>
              </div>
              <span class="flex items-center text-secondary-600 text-sm font-medium bg-secondary-50 px-2 py-1 rounded-md">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">trending_up</mat-icon> 24%
              </span>
            </div>
            <h3 class="text-gray-500 text-sm font-medium mb-1">Profile Views</h3>
            <p class="text-2xl font-bold text-gray-900">412</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Upcoming Jobs -->
          <div class="lg:col-span-2" #upcomingJobs>
            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-900">Upcoming Jobs</h2>
                <button class="text-primary-600 font-medium text-sm hover:text-primary-700">View All</button>
              </div>
              
              <div class="divide-y divide-gray-100">
                @for (job of upcomingJobsList; track job.id) {
                  <div class="p-6 hover:bg-gray-50 transition-colors">
                    <div class="flex flex-col sm:flex-row justify-between gap-4">
                      <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg shrink-0">
                          {{job.customer.charAt(0)}}
                        </div>
                        <div>
                          <h3 class="font-bold text-gray-900 mb-1">{{job.service}}</h3>
                          <p class="text-sm text-gray-600 mb-2">with {{job.customer}}</p>
                          <div class="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span class="flex items-center"><mat-icon class="text-[16px] w-[16px] h-[16px] mr-1">calendar_today</mat-icon> {{job.date}}</span>
                            <span class="flex items-center"><mat-icon class="text-[16px] w-[16px] h-[16px] mr-1">schedule</mat-icon> {{job.time}}</span>
                            <span class="flex items-center"><mat-icon class="text-[16px] w-[16px] h-[16px] mr-1">location_on</mat-icon> {{job.location}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                        <span class="font-bold text-gray-900">\${{job.price}}</span>
                        <div class="flex gap-2">
                          <button class="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                            <mat-icon>chat</mat-icon>
                          </button>
                          <button class="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                            <mat-icon>more_vert</mat-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Recent Reviews & Alerts -->
          <div class="space-y-8" #sideContent>
            <!-- Alerts -->
            <div class="bg-orange-50 rounded-3xl p-6 border border-orange-100">
              <h3 class="font-bold text-orange-900 mb-2 flex items-center gap-2">
                <mat-icon class="text-orange-500">notifications_active</mat-icon> Action Required
              </h3>
              <p class="text-orange-800 text-sm mb-4">You have 2 new booking requests that need your confirmation.</p>
              <button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                Review Requests
              </button>
            </div>

            <!-- Recent Reviews -->
            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-bold text-gray-900">Recent Reviews</h2>
              </div>
              <div class="p-6 space-y-6">
                @for (review of recentReviews; track review.name) {
                  <div>
                    <div class="flex justify-between items-start mb-2">
                      <span class="font-semibold text-gray-900 text-sm">{{review.name}}</span>
                      <div class="flex text-yellow-400">
                        @for (star of [1,2,3,4,5]; track star) {
                          <mat-icon class="text-[14px] w-[14px] h-[14px]">{{ star <= review.rating ? 'star' : 'star_border' }}</mat-icon>
                        }
                      </div>
                    </div>
                    <p class="text-gray-600 text-sm line-clamp-2">{{review.text}}</p>
                  </div>
                }
                <button class="w-full text-center text-primary-600 font-medium text-sm hover:text-primary-700 pt-2">
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('header') header!: ElementRef;
  @ViewChild('statsGrid') statsGrid!: ElementRef;
  @ViewChild('upcomingJobs') upcomingJobs!: ElementRef;
  @ViewChild('sideContent') sideContent!: ElementRef;

  upcomingJobsList = [
    { id: 1, customer: 'Sarah Jenkins', service: 'General Plumbing Repair', date: 'Today', time: '10:00 AM', location: '123 Main St, Apt 4B', price: 120 },
    { id: 2, customer: 'Michael Chen', service: 'Water Heater Check', date: 'Tomorrow', time: '02:00 PM', location: '456 Oak Ave', price: 85 },
    { id: 3, customer: 'Emma Wilson', service: 'Pipe Installation', date: 'Oct 18, 2025', time: '09:00 AM', location: '789 Pine Rd', price: 350 }
  ];

  recentReviews = [
    { name: 'John D.', rating: 5, text: 'Great work, very professional and clean.' },
    { name: 'Alice M.', rating: 5, text: 'Arrived on time and fixed the issue quickly.' },
    { name: 'Robert B.', rating: 4, text: 'Good service, but slightly more expensive than expected.' }
  ];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const { animate, stagger } = await import('motion');

    animate(
      this.header.nativeElement,
      { opacity: [0, 1], y: [-20, 0] },
      { duration: 0.5, ease: "easeOut" }
    );

    animate(
      this.statsGrid.nativeElement.children,
      { opacity: [0, 1], scale: [0.9, 1] },
      { delay: stagger(0.1), duration: 0.5, ease: "easeOut" }
    );

    animate(
      this.upcomingJobs.nativeElement,
      { opacity: [0, 1], x: [-20, 0] },
      { duration: 0.6, ease: "easeOut", delay: 0.3 }
    );

    animate(
      this.sideContent.nativeElement.children,
      { opacity: [0, 1], x: [20, 0] },
      { delay: stagger(0.2, { startDelay: 0.4 }), duration: 0.6, ease: "easeOut" }
    );
  }
}
