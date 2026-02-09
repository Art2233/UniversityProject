import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IStore } from "../../../../../reducer";
import * as MainLayoutStorageActions from "./actions";
import { map, withLatestFrom } from "rxjs";
import { selectMenuItems } from "../sidebar/selector";
import { ExtendSidebarStateAction } from "../../actions";
import { Router } from "@angular/router";

@Injectable()
export class MainLayoutStorageEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
        private router: Router
    ) {}

    init$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MainLayoutStorageActions.InitAction),
            withLatestFrom(this.store.select(selectMenuItems)),
            map(([_, menuItems]) => {
                return ExtendSidebarStateAction({
                    newState: {
                        currentMenuItemId: menuItems.find(item => item.route === this.router.url)?.id,
                    }
                });
            }),
        ),
    );
}