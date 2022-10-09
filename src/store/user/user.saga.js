import {takeLatest, put, all, call} from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './user.type'
import { signInSuccess, signInFailed,  } from './user.action'
import { getCurrentUser } from '../../components/utils/firebase/firebase'


export function* isUserAuthenticated(){
    try{
const userAuth = yield call(getCurrentUser)
if(!userAuth)return

    }catch(error){

    }
}


export function* onChackUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,)
}

export function* userSaga(){
    yield all([])
}