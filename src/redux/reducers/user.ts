import { User } from '../../models/user';
import {SET_USER} from '../actions/actionTypes';

const initialState = {}

const userReducer = (state = initialState, params: { type: string, user: User}) => {
    switch (params.type) {

    case `${SET_USER}`:
        return { 
            ...state,
            user: params.user 
        }

    default:
        return state
    }
}


export default userReducer;