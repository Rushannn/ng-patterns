import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'strategy',
    pathMatch: 'full',
  },
  {
    path: 'strategy',
    loadComponent: () => import('@design-patterns/strategy/example').then((m) => m.CardsListComponent),
  },
];
