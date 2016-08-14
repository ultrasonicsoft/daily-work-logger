import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { MessagesComponent } from '../messages/messages.component';

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
  },
  {
    path: 'messages',
    component: MessagesComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

