import { createAction, props } from "@ngrx/store";

export const NavigationAction = createAction(
    '[App] Navigation',
    props<{ path: string }>(),
);