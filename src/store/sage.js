
import { takeEvery,put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreators';

function* getInitList() {
    // const res= yield axios.get("/list.json");
    // const action= initListAction(res.data);
    // yield put(action)
    const data = ['44', '45', '46'];
    const action = initListAction(data);
    console.log(action)
    yield put(action);
}

function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}


export default todoSagas;