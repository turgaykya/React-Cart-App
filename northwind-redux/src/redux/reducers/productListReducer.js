import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function productListReducer(state = initialState.products, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
    //Aksiyona bak eğer aksiyon yoksa state gönder varsa payload gönder.
}

