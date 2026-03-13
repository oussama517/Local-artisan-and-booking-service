import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="mb-8">
          <a routerLink="/profile" class="inline-flex items-center text-gray-500 hover:text-primary-600 transition-colors font-medium text-sm mb-4">
            <mat-icon class="text-[18px] w-[18px] h-[18px] mr-1">arrow_back</mat-icon> Back to Profile
          </a>
          <h1 class="text-3xl md:text-4xl font-display font-bold text-gray-900">Book a Service</h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Booking Form -->
          <div class="lg:col-span-2 space-y-6" #bookingForm>
            
            <!-- Step 1: Service Details -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">1</div>
                <h2 class="text-xl font-bold text-gray-900">Service Details</h2>
              </div>
              
              <div class="space-y-5">
                <div>
                  <label for="problem-desc" class="block text-sm font-medium text-gray-700 mb-2">What do you need help with?</label>
                  <textarea id="problem-desc" rows="3" class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary-500 focus:border-primary-500 block p-3 outline-none transition-all" placeholder="Describe the problem in detail..."></textarea>
                </div>
                
                <div>
                  <label for="photos" class="block text-sm font-medium text-gray-700 mb-2">Add photos (Optional)</label>
                  <div id="photos" class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <mat-icon class="text-gray-400 text-3xl mb-2">add_photo_alternate</mat-icon>
                    <p class="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p class="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2: Date & Time -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">2</div>
                <h2 class="text-xl font-bold text-gray-900">Date & Time</h2>
              </div>
              
              <div class="mb-6">
                <span id="date-label" class="block text-sm font-medium text-gray-700 mb-3">Select a Date</span>
                <div aria-labelledby="date-label" class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  @for (date of dates; track date.day) {
                    <button class="flex-shrink-0 w-16 h-20 rounded-xl border flex flex-col items-center justify-center transition-all"
                            [class.border-primary-600]="date.selected"
                            [class.bg-primary-50]="date.selected"
                            [class.text-primary-700]="date.selected"
                            [class.border-gray-200]="!date.selected"
                            [class.text-gray-600]="!date.selected"
                            [class.hover:border-primary-300]="!date.selected">
                      <span class="text-xs font-medium uppercase mb-1">{{date.day}}</span>
                      <span class="text-xl font-bold">{{date.date}}</span>
                    </button>
                  }
                </div>
              </div>
              
              <div>
                <span id="time-label" class="block text-sm font-medium text-gray-700 mb-3">Select a Time</span>
                <div aria-labelledby="time-label" class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  @for (time of times; track time.time) {
                    <button class="py-2.5 rounded-xl border text-sm font-medium transition-all"
                            [class.border-primary-600]="time.selected"
                            [class.bg-primary-600]="time.selected"
                            [class.text-white]="time.selected"
                            [class.border-gray-200]="!time.selected && time.available"
                            [class.text-gray-700]="!time.selected && time.available"
                            [class.hover:border-primary-600]="!time.selected && time.available"
                            [class.hover:text-primary-600]="!time.selected && time.available"
                            [class.bg-gray-50]="!time.available"
                            [class.text-gray-400]="!time.available"
                            [class.border-gray-100]="!time.available"
                            [class.cursor-not-allowed]="!time.available"
                            [disabled]="!time.available">
                      {{time.time}}
                    </button>
                  }
                </div>
              </div>
            </div>

            <!-- Step 3: Location -->
            <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">3</div>
                <h2 class="text-xl font-bold text-gray-900">Location</h2>
              </div>
              
              <div class="space-y-4">
                <div>
                  <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input id="address" type="text" class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary-500 focus:border-primary-500 block p-3 outline-none transition-all" placeholder="123 Main St">
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="apt" class="block text-sm font-medium text-gray-700 mb-2">Apt/Suite (Optional)</label>
                    <input id="apt" type="text" class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary-500 focus:border-primary-500 block p-3 outline-none transition-all" placeholder="Apt 4B">
                  </div>
                  <div>
                    <label for="zip" class="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input id="zip" type="text" class="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary-500 focus:border-primary-500 block p-3 outline-none transition-all" placeholder="94105">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1" #orderSummary>
            <div class="bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 sticky top-28">
              <h3 class="font-bold text-gray-900 text-lg mb-4">Booking Summary</h3>
              
              <div class="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                <img src="https://picsum.photos/seed/plumber1/100/100" alt="David Miller" class="w-14 h-14 rounded-xl object-cover" referrerpolicy="no-referrer">
                <div>
                  <h4 class="font-semibold text-gray-900">David Miller</h4>
                  <p class="text-sm text-gray-500">Master Plumber</p>
                </div>
              </div>
              
              <div class="space-y-4 mb-6 pb-6 border-b border-gray-100">
                <div class="flex justify-between">
                  <span class="text-gray-600">Service</span>
                  <span class="font-medium text-gray-900 text-right">General Plumbing Repair</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Date</span>
                  <span class="font-medium text-gray-900">Oct 15, 2025</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Time</span>
                  <span class="font-medium text-gray-900">10:00 AM</span>
                </div>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-500">Hourly Rate</span>
                  <span class="text-gray-900">$85.00</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-500">Estimated Duration</span>
                  <span class="text-gray-900">1-2 hours</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-500">Service Fee</span>
                  <span class="text-gray-900">$15.00</span>
                </div>
              </div>
              
              <div class="flex justify-between items-center mb-8 pt-4 border-t border-gray-100">
                <span class="font-bold text-gray-900">Estimated Total</span>
                <span class="font-bold text-2xl text-primary-600">$100.00</span>
              </div>
              
              <button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg">
                Confirm Booking
              </button>
              
              <p class="text-center text-xs text-gray-500 mt-4">
                You will only be charged after the service is completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BookingComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('bookingForm') bookingForm!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: ElementRef;

  dates = [
    { day: 'Mon', date: '14', selected: false },
    { day: 'Tue', date: '15', selected: true },
    { day: 'Wed', date: '16', selected: false },
    { day: 'Thu', date: '17', selected: false },
    { day: 'Fri', date: '18', selected: false },
    { day: 'Sat', date: '19', selected: false },
    { day: 'Sun', date: '20', selected: false }
  ];

  times = [
    { time: '08:00 AM', available: false, selected: false },
    { time: '09:00 AM', available: true, selected: false },
    { time: '10:00 AM', available: true, selected: true },
    { time: '11:00 AM', available: true, selected: false },
    { time: '01:00 PM', available: true, selected: false },
    { time: '02:00 PM', available: true, selected: false },
    { time: '03:00 PM', available: false, selected: false },
    { time: '04:00 PM', available: true, selected: false }
  ];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const { animate, stagger } = await import('motion');

    animate(
      this.bookingForm.nativeElement.children,
      { opacity: [0, 1], y: [30, 0] },
      { delay: stagger(0.15), duration: 0.7, ease: "easeOut" }
    );

    animate(
      this.orderSummary.nativeElement,
      { opacity: [0, 1], scale: [0.95, 1], x: [20, 0] },
      { duration: 0.6, ease: "easeOut", delay: 0.3 }
    );
  }
}
