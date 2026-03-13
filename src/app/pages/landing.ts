import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-20">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-white">
        <!-- Background decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div class="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-50/50 blur-3xl"></div>
          <div class="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary-50/50 blur-3xl"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div #heroContent class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Over 10,000 trusted artisans
              </div>
              <h1 class="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Book Trusted <span class="text-primary-600">Local Artisans</span> Near You
              </h1>
              <p class="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                From plumbing to carpentry, connect with verified professionals for all your home repair and improvement needs.
              </p>
              
              <!-- Search Box -->
              <div class="bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col sm:flex-row gap-2">
                <div class="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                  <mat-icon class="text-gray-400 mr-3">search</mat-icon>
                  <input type="text" placeholder="What do you need help with?" class="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400">
                </div>
                <div class="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                  <mat-icon class="text-gray-400 mr-3">location_on</mat-icon>
                  <input type="text" placeholder="Zip code or city" class="bg-transparent border-none outline-none w-full text-gray-700 placeholder-gray-400">
                </div>
                <button routerLink="/category" class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center whitespace-nowrap">
                  Search
                </button>
              </div>
              
              <div class="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <span>Popular:</span>
                <a href="#" class="hover:text-primary-600 transition-colors">Plumbing</a>
                <a href="#" class="hover:text-primary-600 transition-colors">Electrical</a>
                <a href="#" class="hover:text-primary-600 transition-colors">Painting</a>
              </div>
            </div>
            
            <div #heroImage class="relative lg:h-[600px] flex items-center justify-center">
              <div class="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/carpenter/800/1000" alt="Carpenter working" class="object-cover w-full h-full" referrerpolicy="no-referrer">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
                <!-- Floating Card -->
                <div class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                  <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" class="w-12 h-12 rounded-full border-2 border-white shadow-sm" referrerpolicy="no-referrer">
                  <div>
                    <div class="flex items-center gap-1 mb-0.5">
                      <span class="font-semibold text-gray-900">Marcus T.</span>
                      <mat-icon class="text-secondary-500 text-[16px] w-[16px] h-[16px]">verified</mat-icon>
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <mat-icon class="text-yellow-400 text-[16px] w-[16px] h-[16px] mr-1">star</mat-icon>
                      <span class="font-medium text-gray-900 mr-1">4.9</span>
                      <span>(124 jobs)</span>
                    </div>
                  </div>
                  <div class="ml-auto bg-secondary-50 text-secondary-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                    Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="py-24 bg-gray-50" #categoriesSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="text-3xl font-display font-bold text-gray-900 mb-4">Explore Services</h2>
              <p class="text-gray-600 max-w-2xl">Find the right professional for your specific needs.</p>
            </div>
            <a routerLink="/category" class="hidden sm:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
              View all services <mat-icon class="ml-1">arrow_forward</mat-icon>
            </a>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            @for (cat of categories; track cat.name) {
              <a routerLink="/category" class="category-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all flex flex-col items-center text-center group cursor-pointer">
                <div class="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors text-gray-600">
                  <mat-icon class="text-3xl">{{cat.icon}}</mat-icon>
                </div>
                <h3 class="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">{{cat.name}}</h3>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="py-24 bg-white" #howItWorksSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">Get your home repairs done in three simple steps.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <!-- Connecting line -->
            <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 z-0"></div>
            
            @for (step of steps; track step.title; let i = $index) {
              <div class="step-card relative z-10 flex flex-col items-center text-center">
                <div class="w-24 h-24 rounded-full bg-white border-8 border-gray-50 flex items-center justify-center shadow-sm mb-6 relative">
                  <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center border-4 border-white">
                    {{i + 1}}
                  </div>
                  <mat-icon class="text-4xl text-primary-600">{{step.icon}}</mat-icon>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{step.title}}</h3>
                <p class="text-gray-600">{{step.desc}}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Featured Artisans -->
      <section class="py-24 bg-gray-50" #featuredSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-end mb-12">
            <div>
              <h2 class="text-3xl font-display font-bold text-gray-900 mb-4">Top Rated Artisans</h2>
              <p class="text-gray-600 max-w-2xl">Highly recommended professionals in your area.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (artisan of featuredArtisans; track artisan.name) {
              <div class="artisan-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover cursor-pointer" routerLink="/profile">
                <div class="h-48 relative">
                  <img [src]="artisan.image" [alt]="artisan.name" class="w-full h-full object-cover" referrerpolicy="no-referrer">
                  <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-medium shadow-sm">
                    <mat-icon class="text-yellow-400 text-[16px] w-[16px] h-[16px]">star</mat-icon>
                    {{artisan.rating}}
                  </div>
                </div>
                <div class="p-5">
                  <div class="flex justify-between items-start mb-2">
                    <div>
                      <h3 class="font-bold text-gray-900 text-lg">{{artisan.name}}</h3>
                      <p class="text-primary-600 font-medium text-sm">{{artisan.category}}</p>
                    </div>
                    <div class="bg-secondary-50 text-secondary-700 p-1.5 rounded-lg">
                      <mat-icon class="text-[20px] w-[20px] h-[20px]">verified</mat-icon>
                    </div>
                  </div>
                  <div class="flex items-center text-gray-500 text-sm mb-4">
                    <mat-icon class="text-[16px] w-[16px] h-[16px] mr-1">location_on</mat-icon>
                    {{artisan.distance}} away
                  </div>
                  <div class="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <span class="font-semibold text-gray-900">\${{artisan.price}}<span class="text-gray-500 font-normal text-sm">/hr</span></span>
                    <button class="text-primary-600 font-medium hover:text-primary-700 text-sm">View Profile</button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
            <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-secondary-500 rounded-full blur-3xl opacity-30"></div>
            
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">Ready to get your project started?</h2>
            <p class="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 text-lg">Join thousands of homeowners who trust LocalArtisan for their repair and improvement needs.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button routerLink="/category" class="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-medium transition-colors text-lg">
                Find a Professional
              </button>
              <button class="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-medium transition-colors text-lg">
                Become an Artisan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class LandingComponent implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  @ViewChild('heroContent') heroContent!: ElementRef;
  @ViewChild('heroImage') heroImage!: ElementRef;
  @ViewChild('categoriesSection') categoriesSection!: ElementRef;
  @ViewChild('howItWorksSection') howItWorksSection!: ElementRef;
  @ViewChild('featuredSection') featuredSection!: ElementRef;

  categories = [
    { name: 'Plumbing', icon: 'plumbing' },
    { name: 'Electrical', icon: 'electrical_services' },
    { name: 'Carpentry', icon: 'carpenter' },
    { name: 'Painting', icon: 'format_paint' },
    { name: 'Cleaning', icon: 'cleaning_services' },
    { name: 'Appliance', icon: 'kitchen' }
  ];

  steps = [
    { title: 'Search & Compare', desc: 'Find local professionals, read reviews, and compare prices.', icon: 'search' },
    { title: 'Book Instantly', desc: 'Choose a time that works for you and book directly online.', icon: 'event_available' },
    { title: 'Get it Done', desc: 'The artisan arrives and completes the job to your satisfaction.', icon: 'task_alt' }
  ];

  featuredArtisans = [
    { name: 'David Miller', category: 'Master Plumber', rating: 4.9, distance: '2.4 miles', price: 85, image: 'https://picsum.photos/seed/plumber1/400/300' },
    { name: 'Sarah Jenkins', category: 'Electrician', rating: 4.8, distance: '3.1 miles', price: 95, image: 'https://picsum.photos/seed/electrician1/400/300' },
    { name: 'Michael Chen', category: 'Carpenter', rating: 5.0, distance: '1.2 miles', price: 75, image: 'https://picsum.photos/seed/carpenter2/400/300' },
    { name: 'Elena Rodriguez', category: 'Appliance Repair', rating: 4.7, distance: '4.5 miles', price: 65, image: 'https://picsum.photos/seed/repair1/400/300' }
  ];

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const { animate, stagger, inView } = await import('motion');

    // Hero Animations
    animate(
      this.heroContent.nativeElement.children,
      { opacity: [0, 1], y: [30, 0] },
      { delay: stagger(0.1), duration: 0.8, ease: "easeOut" }
    );

    animate(
      this.heroImage.nativeElement,
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 1, ease: "easeOut", delay: 0.2 }
    );

    // Scroll Animations
    inView(this.categoriesSection.nativeElement, () => {
      const cards = this.categoriesSection.nativeElement.querySelectorAll('.category-card');
      animate(
        cards,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.05), duration: 0.6, ease: "easeOut" }
      );
    });

    inView(this.howItWorksSection.nativeElement, () => {
      const steps = this.howItWorksSection.nativeElement.querySelectorAll('.step-card');
      animate(
        steps,
        { opacity: [0, 1], y: [30, 0] },
        { delay: stagger(0.15), duration: 0.8, ease: "easeOut" }
      );
    });

    inView(this.featuredSection.nativeElement, () => {
      const cards = this.featuredSection.nativeElement.querySelectorAll('.artisan-card');
      animate(
        cards,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.6, ease: "easeOut" }
      );
    });
  }
}
