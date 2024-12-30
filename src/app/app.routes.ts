import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';

export const routes: Routes = [
  // {
  //   path: 'child1',
  //   loadComponent: () => import('./child1/child1.component').then(m => m.Child1Component)
  // },
  {
    path: 'child1',
    component: Child1Component,
  },
  {
    path: 'child2',
    loadComponent: () => import('./child2/child2.component').then(m => m.Child2Component)
  },
  {
    path: 'child3',
    loadComponent: () => import('./child3/child3.component').then(m => m.Child3Component)
  }
];
