import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";

export const ExtendStateAction = createAction(
    '[Storage] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const ToggleExpandMenuItemAction = createAction(
    '[Storage] Toggle Expand Menu Item',
    props<{ itemId: number }>(),
);

export const SelectMenuItemAction = createAction(
    '[Storage] Select Menu Item',
    props<{ itemId: number }>(),
);