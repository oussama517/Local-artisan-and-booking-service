import {Routes} from '@angular/router';
import { LandingComponent } from './pages/landing';
import { CategoryComponent } from './pages/category';
import { ProfileComponent } from './pages/profile';
import { BookingComponent } from './pages/booking';
import { DashboardComponent } from './pages/dashboard';
import { LoginComponent } from './pages/login';
import { SignupComponent } from './pages/signup';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];

