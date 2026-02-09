import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../../storage/entities/sidebar/selector';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/services/tranlsate/translate-pipe';

@Component({
    selector: 'app-main-layout-sidebar',
    imports: [CommonModule, MatListModule, MatIconModule, TranslatePipe],
    templateUrl: './main-layout-sidebar.component.html',
    styleUrl: './main-layout-sidebar.component.scss',
})
export class MainLayoutSidebarComponent {
    @Input() menuItems: IMenuItem[] = [];
    @Input() selectedMenuItemId?: number;

    @Output() onSelectMenuItem = new EventEmitter<{ menuItemId: number }>();
}
