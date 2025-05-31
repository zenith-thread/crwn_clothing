// REDUX PERSIST
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

// REDUX SAGA
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

/* middleware will not be applied in the production environment. We are using [].filter(Boolean)
 * because we don't want to have any falsy value returning and then applied to composeEnhancers */

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

// After the saga is applied to the store. run the saga middleware using root saga.
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
