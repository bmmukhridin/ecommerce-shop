import React from "react";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

///root-reducer
const middlewares = [logger];
const composedEnhaancer = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhaancer);
