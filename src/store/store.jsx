import { compose,createStore, applyMiddleware } from "redux";
//import { legacy_createStore as createStore} from 'redux'

import { rootReducer } from "./root-reducer";
// import logger from 'redux-logger';

const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(!action.type){
        return next(action)
    }
    console.log("type: ", action.type)
    console.log("payload: ", action.payload)
    console.log("currentState", store.getState())

    next(action)

    console.log("next state: ", store.getState())
}

///root-reducer
const middlewares = [loggerMiddleware];
const composedEnhaancer = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhaancer);
