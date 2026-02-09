import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { TranslatePipe } from '../../../../shared/services/tranlsate/translate-pipe';

enum StudentStatusText {
    active = 'STUDIES',
    academic = 'ACADEMIC',
    expelled = 'EXPELLED_STATUS',
}

enum StudentStatusClass {
    active = 'active',
    academic = 'academic',
    expelled = 'expelled',
}

interface StudentStatus {
    text: StudentStatusText;
    class: StudentStatusClass;
}

export interface StudentElement {
    id: number;
    name: string;
    email: string;
    group: string;
    course: number;
    status: StudentStatus;
    initials: string;
}

const ELEMENT_DATA: StudentElement[] = [
    { id: 1, name: 'Олександр Петренко', email: 'o.petrenko@student.com', group: 'KN-21', course: 2, status: { text: StudentStatusText.active, class: StudentStatusClass.active }, initials: 'ОП' },
    { id: 2, name: 'Марія Іваненко', email: 'm.ivanenko@student.com', group: 'KN-21', course: 2, status: { text: StudentStatusText.active, class: StudentStatusClass.active }, initials: 'МІ' },
    { id: 3, name: 'Дмитро Коваль', email: 'd.koval@student.com', group: 'KN-21', course: 2, status: { text: StudentStatusText.academic, class: StudentStatusClass.academic }, initials: 'ДК' },
    { id: 4, name: 'Анна Сидоренко', email: 'a.sydorenko@student.com', group: 'KN-22', course: 2, status: { text: StudentStatusText.active, class: StudentStatusClass.active }, initials: 'АС' },
    { id: 5, name: 'Максим Бондар', email: 'm.bondar@student.com', group: 'KN-22', course: 2, status: { text: StudentStatusText.expelled, class: StudentStatusClass.expelled }, initials: 'МБ' },
];

@Component({
    selector: 'app-students',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        TranslatePipe
    ],
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
    displayedColumns: string[] = ['name', 'group', 'course', 'status'];
    dataSource = ELEMENT_DATA;
}