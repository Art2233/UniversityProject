import { createAction, props } from "@ngrx/store";
import { language } from "./shared/services/tranlsate/translate.service";
import { IState } from "./app.reducer";

export const ExtendStateAction = createAction(
    '[App] Extend State',
    props<{ state: Partial<IState> }>(),
);

export const NavigationAction = createAction(
    '[App] Navigation',
    props<{ path: string }>(),
);

export const SetLanguageAction = createAction(
    '[App] Set Language',
    props<{ language: language }>(),
);