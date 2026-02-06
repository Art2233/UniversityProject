import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IStore } from "./reducer";
import { Store } from "@ngrx/store";
import * as AppActions from "./app.actions";
import { Router } from "@angular/router";
import { tap } from "rxjs";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
        private router: Router,
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
}