import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'example',
                loadComponent: () => import('./pages/main-layout/children-pages/example-page/example-page.component').then(m => m.ExamplePageComponent)
            }
        ]
    },
];
