import { put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_USER_LIST, GET_ALL_USER_LIST_SUCCESS, DELETE_USER } from '../Types';
import { getAll, removeUser } from '../service/UserService';


function* getUserList() {
    const result = yield getAll();
    console.log(result)
    yield put({
        type: GET_ALL_USER_LIST_SUCCESS,
        payload: result
    });
}

function* deleteUser(payload){
     yield removeUser(payload.payload);
      yield put({
        type: GET_ALL_USER_LIST,
    })
}

function* usersSaga() {
    yield takeLatest(GET_ALL_USER_LIST, getUserList);
    yield takeLatest(DELETE_USER, deleteUser);

}

export default usersSaga;