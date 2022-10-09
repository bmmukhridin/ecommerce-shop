import { compose, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { legacy_createStore as createStore} from 'redux'
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer);

///root-reducer
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware
].filter(Boolean);
const composedEnhaancer = compose(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhaancer
);
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
