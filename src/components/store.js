import { applyMiddleware, createStore } from 'redux';
import thunk                            from 'redux-thunk';
import createSagaMiddleware             from 'redux-saga';
import { composeWithDevTools }          from 'redux-devtools-extension';
import { createLogger }                 from 'redux-logger';

import reducer from './reducer';

const logger = createLogger({
  collapsed:true,
})

export default initialState => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(reducer, initialState,
      applyMiddleware(
        thunk,
        sagaMiddleware,
        logger,
      )
    ),
    runSaga: sagaMiddleware.run
  }
}

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(reducer, initialState,
      composeWithDevTools(applyMiddleware(
        thunk,
        sagaMiddleware,
        logger,
      ))
    ),
    runSaga: sagaMiddleware.run
  }
}
