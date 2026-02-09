import { Component, OnInit } from '@angular/core';
import { AppContainerComponent } from '../../shared/app-container/app-container.component';
import { MainLayoutSidebarComponent } from './components/main-layout-sidebar/main-layout-sidebar.component';
import { Store } from '@ngrx/store';
import { IStore } from '../../reducer';
import { selectCurrentMenuItemId, selectMenuItems } from './storage/entities/sidebar/selector';
import { AsyncPipe } from '@angular/common';
import { SelectMenuItem } from './storage/entities/sidebar/actions';
import { RouterOutlet } from '@angular/router';
import { InitAction } from './storage/entities/main/actions';

@Component({
    selector: 'app-main-layout',
    imports: [AppContainerComponent, MainLayoutSidebarComponent, AsyncPipe, RouterOutlet],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit{
    sidebarMenu$ = this.store.select(selectMenuItems);
    selectedMenuItemId$ = this.store.select(selectCurrentMenuItemId);

    SelectMenuItem = SelectMenuItem;

    constructor(
        public store: Store<IStore>,
    ) {}

    ngOnInit(): void {
        this.store.dispatch(InitAction());
    }
}
