import { reducer as appReducer, IState as IAppState } from './app.reducer'

export interface IStore {
    appReducer: IAppState;
}

export const reducers = {
    appReducer: appReducer,
}