import { reducer as appReducer, IState as IAppState } from './app.reducer'
import { reducer as mainLayoutReducer, IState as IMainLayoutState } from './pages/main-layout/storage/reducer';

export interface IStore {
    appReducer: IAppState;
    mainLayoutReducer: IMainLayoutState;
}

export const reducers = {
    appReducer: appReducer,
    mainLayoutReducer: mainLayoutReducer,
}