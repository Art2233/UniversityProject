import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";
import { IMainLayoutStorageState } from "./entities/sidebar/selector";

export const ExtendStateAction = createAction(
    '[MainLayoutStorage] ExtendState',
    props<{ newState: Partial<IState> }>(),
);

export const ExtendSidebarStateAction = createAction(
    '[MainLayoutStorage] ExtendSidebarState',
    props<{ newState: Partial<IMainLayoutStorageState> }>(),
);