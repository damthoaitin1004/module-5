import { applyMiddleware, createStore } from "redux"
import { rootReduce } from "./Index"
import createSagaMiddleware from 'redux-saga';
import usersSaga from '../saga/Saga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReduce,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(usersSaga);

export default store;