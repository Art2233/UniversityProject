import { Injectable } from '@angular/core';

import uaLanguage from './ua.json';
import enLanguage from './en.json';

interface TranslationData {
    [key: string]: string | TranslationData;
}

const LANGUAGE_STORAGE_KEY = 'NG_TRANSLATE_LANG_KEY';

export type language = 'ua' | 'en';

export const languages: Record<language, language> = { ua: 'ua', en: 'en' };

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    private data: TranslationData = {};

    getValue(key: string): string {
        const keys = key.split('.');
        let result: string | TranslationData = this.data;

        for (const k of keys) {
            if (typeof result === 'string') {
                return result;
            }
            result = result[k] as TranslationData;
            if (!result) {
                return key;
            }
        }

        return typeof result === 'string' ? result : key;
    }

    useLanguage(lang: language): void {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

        if (lang === languages.ua) {
            this.data = uaLanguage as TranslationData;
        } else if (lang === languages.en) {
            this.data = enLanguage as TranslationData;
        }
    }

    getCurrentLanguage(): language {
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as language;
        return savedLanguage || languages.ua;
    }
}
