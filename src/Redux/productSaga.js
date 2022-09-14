import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

// takeEvery meaning : Ye do paramters leta hai ...

// Genrator functions async operation ke complete hone ke baad hi apna result return
// karte hai tabhi usually hum generator functions ka use karte hai async operations me
// generator function ke pehechan function* astrick se hoti hai

function*  getProducts() {
   
    // console.warn('call API here') /// Also async await generator function me use nahi hota
    // yaha hum yield use karenege for the async operations ke liye 
let data = yield fetch('http://localhost:3500/product')
data = yield data.json()
// console.warn('Action Called!!', data)
// KeyPoint : sab kuch redux ke andar type se hi call hota hai 
yield put({type:SET_PRODUCT_LIST, data})    

}

function* searchProducts(data){

let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
result = yield result.json();
console.warn('action is called', data)
yield put({type:SET_PRODUCT_LIST, data:result})  


}

function* productSaga() {

    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    

}

export default productSaga;
