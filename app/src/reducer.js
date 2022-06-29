/* eslint-disable prettier/prettier */
import {CHANGE_N_POLICE} from './actions';
const initialState = {
    N_police: '',
};
export default function PolicyReducer (state = initialState, action){
    switch (action.type) {
        case CHANGE_N_POLICE:
            return { ...state,N_police:action.payload };
        default:
            return state;
    }
}