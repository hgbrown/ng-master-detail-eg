import { Route } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';

export const routerConfig: Route[] = [
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'messages',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'messages'
  }
];
