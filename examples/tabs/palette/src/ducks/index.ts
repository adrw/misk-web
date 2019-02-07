import {
  dispatchSimpleNetwork,
  IDispatchSimpleNetwork,
  ISimpleNetworkState,
  SimpleNetworkReducer,
  simpleNetworkSelector,
  watchSimpleNetworkSagas
} from "@misk/core"
export { dispatchSimpleNetwork } from "@misk/core"
import {
  connectRouter,
  LocationChangeAction,
  RouterState
} from "connected-react-router"
import { History } from "history"
import { AnyAction, combineReducers, Reducer } from "redux"
import { all, AllEffect, fork } from "redux-saga/effects"
import {
  default as PaletteReducer,
  IPaletteState,
  IDispatchPalette,
  paletteSelector,
  watchPaletteSagas,
  dispatchPalette
} from "./palette"
export * from "./palette"

/**
 * Redux Store State
 */
export interface IState {
  palette: IPaletteState
  router: Reducer<RouterState, LocationChangeAction>
  simpleNetwork: ISimpleNetworkState
}

/**
 * Dispatcher
 */

export interface IDispatchProps
  extends IDispatchSimpleNetwork,
    IDispatchPalette {}

export const rootDispatcher: IDispatchProps = {
  ...dispatchSimpleNetwork,
  ...dispatchPalette
}

/**
 * State Selectors
 */
export const rootSelectors = (state: IState) => ({
  palette: paletteSelector(state),
  simpleNetwork: simpleNetworkSelector(state)
})

/**
 * Reducers
 */
export const rootReducer = (
  history: History
): Reducer<
  {
    palette: any
    router: RouterState
    simpleNetwork: any
  },
  AnyAction
> =>
  combineReducers({
    palette: PaletteReducer,
    router: connectRouter(history),
    simpleNetwork: SimpleNetworkReducer
  })

/**
 * Sagas
 */
export function* rootSaga(): IterableIterator<AllEffect> {
  yield all([fork(watchPaletteSagas), fork(watchSimpleNetworkSagas)])
}
