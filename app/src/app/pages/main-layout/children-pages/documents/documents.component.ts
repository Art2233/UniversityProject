import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { TranslatePipe } from '../../../../shared/services/tranlsate/translate-pipe';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';

enum StatusText {
    signed = 'SIGNED',
    waiting = 'PENDING',
    rejected = 'REJECTED',
}

enum StatusClass {
    signed = 'signed',
    waiting = 'waiting',
    rejected = 'rejected',
}

interface IStatus {
    text: StatusText;
    class: StatusClass;
}

export interface PeriodicElement {
    isSelected: boolean;
    date: string;
    name: string;
    number: string;
    status: IStatus;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { isSelected: false, date: '09.02.2026', name: 'Документ №1', number: '123', status: { text: StatusText.signed, class: StatusClass.signed } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №2', number: '', status: { text: StatusText.waiting, class: StatusClass.waiting } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №3', number: '1', status: { text: StatusText.rejected, class: StatusClass.rejected } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №4', number: '', status: { text: StatusText.waiting, class: StatusClass.waiting } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №5', number: '233', status: { text: StatusText.waiting, class: StatusClass.waiting } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №6', number: '', status: { text: StatusText.waiting, class: StatusClass.waiting } },
    { isSelected: false, date: '09.02.2026', name: 'Документ №7', number: '', status: { text: StatusText.waiting, class: StatusClass.waiting } },
];

@Component({
    selector: 'app-documents',
    imports: [
        CommonModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatSortModule,
        TranslatePipe,
        MatButtonModule
    ],
    templateUrl: './documents.component.html',
    styleUrl: './documents.component.scss',
})
export class DocumentsComponent implements AfterViewInit {
    displayedColumns: string[] = ['select', 'date', 'name', 'number', 'status'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private liveAnnouncer: LiveAnnouncer
    ) {}

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    sortChange(sortState: Sort) {
        if (sortState.direction) {
            this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this.liveAnnouncer.announce('Sorting cleared');
        }
    }

    isAllSelected() {
        const numSelected = this.dataSource.data.filter(row => row.isSelected).length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    isSomeSelected() {
        return this.dataSource.data.some(row => row.isSelected);
    }

    toggleAllRows() {
        const allSelected = this.isAllSelected();
        this.dataSource.data.forEach(row => row.isSelected = !allSelected);
    }

    isDisabledUpload() {
        return !this.isSomeSelected();
    }
}