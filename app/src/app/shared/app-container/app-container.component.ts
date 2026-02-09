import { CommonModule } from '@angular/common';
import { Component, ContentChild, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-container',
    imports: [CommonModule, HeaderComponent, MatSidenavModule, MatToolbarModule],
    templateUrl: './app-container.component.html',
    styleUrl: './app-container.component.scss',
})
export class AppContainerComponent {
    @ContentChild('sidebar') sidebar?: TemplateRef<null>;
    @ContentChild('content') content!: TemplateRef<null>;

    logoSrc = 'assets/logo.png';
    logoAlt = 'Logo';
}
