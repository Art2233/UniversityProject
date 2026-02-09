import { Routes } from "@angular/router";

export const mainLayoutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'documents',
                loadComponent: () => import('./children-pages/documents/documents.component').then(m => m.DocumentsComponent),
            }
        ]
    }
];