import {createStore, applyMiddleware} from "redux"
import {logger} from "redux-logger"

import rootReducer from "./root-reducer"

const middleware=[];


const store =  createStore(rootReducer,applyMiddleware(...middleware))

export default store;