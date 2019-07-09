'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import {createLogger} from 'redux-logger';

import user from './middlewares/user';
import role from './middlewares/role';

//Найдет и загрузит все reducers из папки
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    user,
    role,
    thunk//, createLogger({collapsed:true})
)(createStore);

export default createStoreWithMiddleware(combineReducers(reducers));
