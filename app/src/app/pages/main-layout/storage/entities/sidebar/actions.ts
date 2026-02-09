import { createAction, props } from "@ngrx/store";

export const SelectMenuItem = createAction(
    '[MainLayoutStorage] SelectMenuItem',
    props<{ menuItemId: number }>(),
);