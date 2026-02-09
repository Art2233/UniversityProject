import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, ContentChild, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { Store } from '@ngrx/store';
import { IStore } from '../../reducer';
import { SetLanguageAction } from '../../app.actions';
import { selectCurrentLanguage } from '../../app.reducer';

@Component({
    selector: 'app-container',
    imports: [CommonModule, HeaderComponent, MatSidenavModule, MatToolbarModule, AsyncPipe],
    templateUrl: './app-container.component.html',
    styleUrl: './app-container.component.scss',
})
export class AppContainerComponent {
    @ContentChild('sidebar') sidebar?: TemplateRef<null>;
    @ContentChild('content') content!: TemplateRef<null>;

    currentLanguage$ = this.store.select(selectCurrentLanguage)

    logoSrc = 'assets/logo.png';
    logoAlt = 'Logo';

    SetLanguageAction = SetLanguageAction;

    constructor(
        public store: Store<IStore>,
    ) {}

}
