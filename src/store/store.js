import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root", //from root level it will store everything in the store
  storage,
  blacklist: ["user"], //values from rootReducer that don't want to persist.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Only run logger middleware when not in production
// middleWares can't be null: filer(Boolean) will remove anything that is false and return an empty object
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

//using google chrome extension: Redux-DevTools
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
