import { ADD_TO_CART } from "./constant"
import { REMOVE_TO_CART } from "./constant"

// Reducer and action ek se jaayeda bhi ho sakete hai but unhe combine karne ke liye
// humein ek root reducer banana padta hai

// Reducer : Ye store ke data ko handle karta hai ...Ye action se data leta hai
// aur data ko store me rakhta hai and store ke data ko update bhi karta hai

// Reducer ki ye responsiblity bhi hoti hai ki wo ye bhi check 
// karta rahe ki kisi component me agar data update ho raha hai to usse store me bhi
// update kare. 

/*
Key Points Reducer :

1) Need root reducer

2) Reducer must return the some value

3) Reducer must have some Initial value

*/

// Interview question : Agar multiple actions and reducers hai to actions and reducers ko
// hum kaise map karenege ... Action me jo hum type likhte hai return statement me 

// Important keypoint :  Reducer tab tak call nahi hoga jab tak hum usse action se connect na kar de
// Isilye humne reducer ko export bhi kiya hai  

// export const cartData = (data = [], action) => {

// Page refresh hone pe cart ka data remove ho jaata hai ....

// console.warn('Reducer Called !!', action)

// Actions me return ka type daalna must hai redux me kyonki ye type hi hai 
// help karta hai ye confirm karne me ki kounsa reducer connect hoga kounse action ke saath 

// ye if comparision type ko add to cart se match karne ke liye hi hota hai 

// if(action.type === 'ADD_TO_CART'){

// console.warn('Reducer Called !!', action)

// }

// else
// {
// return 'ABC'

// }

// }

// VVIMP : why we need switch statement in Reducer function  ? 
// 2 : Make a SwitchStatement
// 3 : Check Some with Switch Statement


export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
        console.warn('ADD_TO_CART condition', action);       
        // return 1+1;
        //action.data current value deta hai cart ki ..but '...data' iska matlab
        //previous jo bhi data the cart wo bhi carry karta hai value 
        // data ek array hai aur jab bhi hum usse new array me send karenege to destruct karenge       
        return [action.data, ...data ]
        // case REMOVE_TO_CART:
        // console.warn('REMOVE_TO_CART condition', action);       
        // return 1-1;
        default:
        // return 'no action called'
        // return data ka matlab cart me koi bhi Item nahi hai  
        return data;    
    }
 

}
