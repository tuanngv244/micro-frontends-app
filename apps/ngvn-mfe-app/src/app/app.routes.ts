import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { WebElementWrapperComponent } from '@ngvn-mfe-app/angular/web-element-wrapper';

export const appRoutes: Route[] = [
  {
    path: 'shell',
    loadChildren: () => import('shell/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('home/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'react',
    component: WebElementWrapperComponent,
    data: {
      loadRemoteBundle: () => import('react/Module'),
      selector: 'app-react-root',
    } as any,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
