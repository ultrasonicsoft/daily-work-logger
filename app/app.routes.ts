import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

