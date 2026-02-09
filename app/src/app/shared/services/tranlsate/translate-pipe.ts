import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private translate: TranslateService) {}
    
    transform(key: string): string {
        if (!key) {
            return '';
        }

        return this.translate.getValue(key);
    }
}
