import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSagas from  './sage';
// import thunk from 'redux-thunk';
const sagaMiddleware = createSagaMiddleware()
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store= createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk)

    );
sagaMiddleware.run(todoSagas)

export default store;