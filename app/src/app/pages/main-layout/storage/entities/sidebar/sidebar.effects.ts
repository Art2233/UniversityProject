import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IStore } from "../../../../../reducer";
import * as SidebarActions from "./actions";
import { concat, of, switchMap, withLatestFrom } from "rxjs";
import { ExtendSidebarStateAction } from "../../actions";
import { NavigationAction } from "../../../../../app.actions";
import { selectMenuItems } from "./selector";

@Injectable()
export class SidebarEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
    ) {}

    selectMenuItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SidebarActions.SelectMenuItem),
            withLatestFrom(this.store.select(selectMenuItems)),
            switchMap(([{ menuItemId }, menuItems]) => {
                const menuItem = menuItems.find(item => item.id === menuItemId);
                return concat(
                    of(ExtendSidebarStateAction({
                        newState: {
                            currentMenuItemId: menuItemId,
                        }
                    })),
                    of(NavigationAction({
                        path: `${menuItem?.route}`,
                    })),
                );
            }),
        ),
    );
}