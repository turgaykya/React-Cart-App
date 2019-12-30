import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(x => x.product.productID === action.payload.product.productID);
            if (addedItem) {
                debugger;
                var newState = state.map(cartItem => {
                    if (cartItem.product.productID === action.payload.product.productID) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity += 1 })
                    }
                    //Esas array içerisindeki quantity'i arttırdık.
                    return cartItem;
                })
                return newState;
            }
            else{
                return [...state,{...action.payload}]
                //Arrayın Kopyasını al bu alanı ekle.
            }
            case actionTypes.REMOVE_FROM_CART:
                let newState2 = state.filter(cartItem=>cartItem.product.productID!==action.payload.productID)
                return newState2;
            default:
                return state;
    }

} 