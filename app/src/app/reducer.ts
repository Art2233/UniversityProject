import { IState as IMainLayoutState, reducer as mainLayoutReducer } from "./pages/main-layout/storage/reducer";

export interface IStore {
    mainLayout: IMainLayoutState
}

export const reducers = {
    mainLayout: mainLayoutReducer
}

// export const { selectCurrentRoute, selectRouteParams } = getRouterSelectors();