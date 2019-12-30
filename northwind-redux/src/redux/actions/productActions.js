import * as actionTypes from './actionTypes'
//Redux dönüş tipleri altaki metod gibi tanımlanır.
export function getProductSuccess(result) {
    return {
        type: actionTypes.GET_PRODUCT_SUCCESS,
        payload: result
    }
}
export function createProductSuccess(product) {
    return {
        type: actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: product
    }
}

export function updateProductSuccess(product) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: product
    }
}

export function saveProductApi(product){
    return fetch("http://localhost:3000/products/" + (product.productID||""),{method:product.productID?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(product)}).then(handleResponse).catch(handleError);
}

export function saveProduct(product){
    return function(dispatch){
        //Veri tabanına git bu işlemi yap sonra then ile dispatch sayesinde redux state güncellemiş olduk.
        return saveProductApi(product).then(savedProduct=>{
            product.productID ? dispatch(updateProductSuccess(product)):dispatch(createProductSuccess(product));
        }).catch(error=> {
            throw error;
        });
    }
}

export async function handleResponse(response){
    if(response.ok){
        return response.json();
    }
    
    const error = await response.text();
    throw new Error(error);
}

export function handleError(error){
    console.error("ERROR!!")
    throw error;
}
//asenkron operasyonlarda drawBack olayı olduğu için redux-thunk kullanılır.Action devreye girmesini sağlar
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";

        if (categoryId) {
            url = url + "?categoryID=" + categoryId;
        }
        return fetch(url).then(response =>
            response.json()
        ).then(response => dispatch(getProductSuccess(response)))
    }

}

