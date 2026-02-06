import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActivedMenuItemId, selectSidebarMenuItems } from './storage/reducer';
import { IStore } from '../../reducer';
import { MainLayoutSidebarMenuItemComponent } from './components/main-layout-sidebar-menu-item/main-layout-sidebar-menu-item.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import * as MainLayoutActions from './storage/actions';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [MainLayoutSidebarMenuItemComponent, CommonModule, AsyncPipe, RouterModule],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
    sidebarMenuItems$ = this.store.select(selectSidebarMenuItems);
    activedMenuItemId$ = this.store.select(selectActivedMenuItemId);

    MainLayoutActions = MainLayoutActions;

    constructor(
        public store: Store<IStore>
    ) {}
}
