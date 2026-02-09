import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { TranslatePipe } from '../../services/tranlsate/translate-pipe';
import { language } from '../../services/tranlsate/translate.service';
import { A11yModule } from "@angular/cdk/a11y";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    TranslatePipe,
    A11yModule
],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    @Input() username = 'Username';
    @Input() notificationsCount = 1;
    @Input() currentLanguage: language = 'en';

    @Output() onLanguageChange = new EventEmitter<{ language: language }>();
}