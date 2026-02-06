import { createReducer, createSelector, on } from "@ngrx/store";
import { ExtendStateAction } from "./actions";
import { IStore } from "../../../reducer";

export interface IMainLayoutSidebarItems {
    name: string;
    id: number
    children?: IMainLayoutSidebarItems[];
    url?: string;
    isExpanded?: boolean;
}

export const mainLayoutInitialState: IMainLayoutSidebarItems[] = [
    {
        name: 'Menu 1',
        id: Math.random(),
        children: [
            {
                name: 'Menu 1.1',
                id: Math.random(),
                url: '/example',
            },
            {
                name: 'Menu 1.2',
                id: Math.random(),
                url: '/example'
            }
        ],
        isExpanded: false,
    },
    {
        name: 'Menu 2',
        id: Math.random(),
        children: [
            {
                name: 'Menu 2.1',
                id: Math.random(),
                url: '/example'
            },
        ],
        isExpanded: false,
    },
    {
        name: 'Menu 3',
        id: Math.random(),
        url: '/example',
    },
    {
        name: 'Menu 4',
        id: Math.random(),
        url: '/example',
    }
];

export interface IState {
    storageSidebarMenuItems: IMainLayoutSidebarItems[];
    sidebarMenuItems: IMainLayoutSidebarItems[];
    activedMenuItemId?: number;
}

export const initialState: IState = {
    storageSidebarMenuItems: mainLayoutInitialState,
    sidebarMenuItems: mainLayoutInitialState,
}

export const reducer = createReducer(
    initialState,
    on(ExtendStateAction, (state, { newState: newState }) => ({
        ...state,
        ...newState
    }))
);

export const selectFeature = (state: IStore) => state.mainLayout;

export const selectState = createSelector(selectFeature, (state) => state);

export const selectSidebarMenuItems = createSelector(selectState, (state) => state.sidebarMenuItems);

export const selectStorageSidebarMenuItems = createSelector(selectState, (state) => state.storageSidebarMenuItems);

export const selectActivedMenuItemId = createSelector(selectState, (state) => state.activedMenuItemId);