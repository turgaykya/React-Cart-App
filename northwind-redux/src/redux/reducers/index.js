import {combineReducers} from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import savedProductReducer from './savedProductReducer'

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
    savedProductReducer
})
//CombineReducers fonksiyonunda reducer objelerimizi tanımlıyoruz.
export default rootReducer;