import { createReducer, createSelector, on } from "@ngrx/store";
import * as MainLayoutStorageActions from "./actions";
import { IStore } from "../../../reducer";
import { IMainLayoutStorageState, IMenuItem } from "./entities/sidebar/selector";

const menuItems: IMenuItem[] = [
    {
        id: 1,
        name: "DOCUMENTS",
        icon: "description",
        route: "/documents",
    },
    {
        id: 2,
        name: "STUDENTS",
        icon: "people",
        route: "/students",
    },
    {
        id: 3,
        name: "SETTINGS",
        icon: "settings",
        route: "/settings",
    },
];


export interface IState {
    sidebar: IMainLayoutStorageState;
}

export const initialState: IState = {
    sidebar: {
        menuItems: menuItems,
    },
};

export const reducer = createReducer(
    initialState,
    on(MainLayoutStorageActions.ExtendStateAction, (state, { newState }) => ({
        ...state,
        ...newState,
    })),
    on(MainLayoutStorageActions.ExtendSidebarStateAction, (state, { newState }) => ({
        ...state,
        sidebar: {
            ...state.sidebar,
            ...newState,
        },
    })),
);

export const selectFeature = (state: IStore) => state.mainLayoutReducer;

export const selectSidebar = createSelector(
    selectFeature,
    (state: IState) => state.sidebar,
);