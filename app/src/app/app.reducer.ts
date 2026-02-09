import { createReducer, createSelector, on } from "@ngrx/store";
import { language } from "./shared/services/tranlsate/translate.service";
import { ExtendStateAction } from "./app.actions";
import { IStore } from "./reducer";

export interface IState {
    currentLanguage: language;
}

export const initialState: IState = {
    currentLanguage: 'en',
};

export const reducer = createReducer(
    initialState,
    on(ExtendStateAction, (state, { state: newState }) => ({ 
        ...state,
        ...newState
    })),
);

export const selectFeature = (state: IStore) => state.appReducer;

export const selectCurrentLanguage = createSelector(
    selectFeature,
    (state) => state.currentLanguage,
)