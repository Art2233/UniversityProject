import { Routes } from "@angular/router";

export const mainLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main-layout.component').then(m => m.MainLayoutComponent),
    }
];