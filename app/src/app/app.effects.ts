import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { IStore } from "./reducer";
import { Store } from "@ngrx/store";
import * as AppActions from "./app.actions";
import { Router } from "@angular/router";
import { map, tap } from "rxjs";
import { language, TranslateService } from "./shared/services/tranlsate/translate.service";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
        private router: Router,
        private translateService: TranslateService,
    ) {}

    Navigate$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.NavigationAction),
            tap(({ path }) => {
                this.router.navigate([path]);
            }),
        ),
        { dispatch: false },
    );

    setLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.SetLanguageAction),
            map(({ language }) => {
                this.translateService.useLanguage(language);

                return AppActions.ExtendStateAction({
                    state: {
                        currentLanguage: language,
                    }
                });
            }),
        ),
    )

    getLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            map(() => {
                const savedLanguage = (localStorage.getItem('NG_TRANSLATE_LANG_KEY') ?? 'ua') as language;
                this.translateService.useLanguage(savedLanguage);

                return AppActions.ExtendStateAction({
                    state: {
                        currentLanguage: savedLanguage,
                    }
                })
            })
        ),
    );
}