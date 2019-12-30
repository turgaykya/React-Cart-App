import * as actionTypes from './actionTypes'

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
    //Senin type'ın bu. Reducer bunu gördüğünde diyor ki senin payload'ın category.Yani şuan ki değerin olarak bunu vermiş oluyoruz.
}
//Redux dönüş tipleri altaki metod gibi tanımlanır.
export function getCategoriesSuccess(result){
    return{
        type:actionTypes.GET_CATEGORIES_SUCCESS,
        payload:result
    }
}
//asenkron operasyonlarda drawBack olayı olduğu için redux-thunk kullanılır.
export function getCategories(){
    return function(dispatch){
        let url = "http://localhost:3000/categories";
        return fetch(url).then(response=>
            response.json()
        ).then(response=>dispatch(getCategoriesSuccess(response)))
    }

}