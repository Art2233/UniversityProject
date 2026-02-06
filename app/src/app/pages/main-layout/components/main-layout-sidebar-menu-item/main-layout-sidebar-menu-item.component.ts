import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMainLayoutSidebarItems } from '../../storage/reducer';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-layout-sidebar-menu-item',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './main-layout-sidebar-menu-item.component.html',
    styleUrl: './main-layout-sidebar-menu-item.component.scss',
})
export class MainLayoutSidebarMenuItemComponent {
    @Input() menuItems: IMainLayoutSidebarItems[] = [];
    @Input() level = 0;
    @Input() activedMenuItemId?: number;

    @Output() onToggleExpandMenuItem = new EventEmitter<{ itemId: number }>();
    @Output() onSelectMenuItem = new EventEmitter<{ itemId: number }>();
}
