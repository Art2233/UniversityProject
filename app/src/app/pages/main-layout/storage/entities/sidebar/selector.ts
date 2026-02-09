import { createSelector } from "@ngrx/store";
import { selectFeature } from "../../reducer";

export interface IMenuItem {
    id: number;
    name: string;
    icon: string;
    route: string;
}

export interface IMainLayoutStorageState {
    menuItems: IMenuItem[];
    currentMenuItemId?: number;
}

export const selectMainLayoutStorageState = createSelector(
    selectFeature,
    (state) => state.sidebar,
);

export const selectMenuItems = createSelector(
    selectMainLayoutStorageState,
    (state) => state.menuItems,
);

export const selectCurrentMenuItemId = createSelector(
    selectMainLayoutStorageState,
    (state) => state?.currentMenuItemId,
);
