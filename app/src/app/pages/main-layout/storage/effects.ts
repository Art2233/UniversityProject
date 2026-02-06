import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as MainLayoutActions from "./actions";
import { concat, map, of, switchMap, withLatestFrom } from "rxjs";
import { selectSidebarMenuItems } from "./reducer";
import { IStore } from "../../../reducer";
import { NavigationAction } from "../../../app.actions";

@Injectable()
export class MainLayoutEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IStore>,
    ) {}

    toggleExpandMenuItem$ = createEffect(() => 
        this.actions$.pipe(
            ofType(MainLayoutActions.ToggleExpandMenuItemAction),
            withLatestFrom(this.store.select(selectSidebarMenuItems)),
            map(([{ itemId }, menuItems]) => {
                const nextMenuItems = menuItems.map(item => {
                    return item.id === itemId
                        ? { ...item, isExpanded: !item.isExpanded }
                        : item;
                });

                return MainLayoutActions.ExtendStateAction({
                    newState: {
                        sidebarMenuItems: nextMenuItems,
                        storageSidebarMenuItems: nextMenuItems,
                    }
                });
            }),
        ),
    );

    selectMenuItem$ = createEffect(() => 
        this.actions$.pipe(
            ofType(MainLayoutActions.SelectMenuItemAction),
            switchMap(({ itemId }) => {
                return concat(
                    of(MainLayoutActions.ExtendStateAction({
                        newState: {
                            activedMenuItemId: itemId,
                        }
                    })),
                    of(NavigationAction({
                        path: '/example',
                    }))
                )
            }),
        ),
    );
}