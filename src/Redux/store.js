import {createStore} from 'redux'
import rootReducer from './rootReducer' 

//  Store ke andar saari application ka data hota hai

// Store ka input : Reducer hota hai... for example jaise humne dummyReducer function banaya hai
// Store ka Output :  createStorefunction hota hai wo actually humien jo data hota hai usko
// humari application me Inject kar deta hai

// In short : Reducer Store ka Input hota hai and data ya fir ek function keh sakete ho 
// wo Store ka output hota hai 

// const dummyReducer = ()=>{

//     return 100; 
// }

const store = createStore(rootReducer); 

export default store; 
