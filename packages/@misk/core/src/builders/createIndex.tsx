///<reference types="redux-saga" />
///<reference types="webpack-env" />
import {
  routerMiddleware,
  RouterState,
  LocationChangeAction
} from "connected-react-router"
import { createBrowserHistory, History } from "history"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Reducer
} from "redux"
import createSagaMiddleware from "redux-saga"
import { AllEffect, ForkEffectDescriptor, SimpleEffect } from "redux-saga/effects"
import { IWindow } from "../utilities"

export const createIndex = (
  tabSlug: string,
  App: ({ history }: { history: History }) => JSX.Element,
  Ducks: {
    rootReducer: (
      history: History
    ) => Reducer<
      { router: Reducer<RouterState, LocationChangeAction> } & any,
      AnyAction
    >
    rootSaga: () => IterableIterator<
    AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>
  >s
  }
) => {
  const Window = window as IWindow

  Window.Misk.History = Window.Misk.History || createBrowserHistory()
  const history = Window.Misk.History
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancer: typeof compose =
    Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    Ducks.rootReducer(history),
    composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )

  /**
   * Starts the rootSaga which forks off instances of all sagas used to receive and process actions as they are dispatched (./sagas/index.ts)
   */
  sagaMiddleware.run(Ducks.rootSaga)

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>,
      document.getElementById(tabSlug)
    )
  }

  render()

  // Hot reloading
  if (module.hot) {
    // Reload components
    module.hot.accept(App as any, () => {
      render()
    })

    // Reload reducers
    module.hot.accept(Ducks as any, () => {
      store.replaceReducer(Ducks.rootReducer(history))
    })
  }
}
