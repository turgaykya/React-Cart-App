import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function savedProductReducer(state = initialState.savedProduct, action) {
    switch (action.type) {
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload;
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
    //Aksiyona bak eğer aksiyon yoksa state gönder varsa payload gönder.
}

