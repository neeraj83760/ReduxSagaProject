// Ek project ke andar ek se jaayeda reducer ho sakete hai but store na ek
// hi reducer se connect kartah hai isiliye hum saare reducer ko ek hi 
// root reducer ke andar combine kar dete hain

import {combineReducers} from 'redux'
import {cartData} from './reducer'

export default combineReducers({
    // as per adv javascript jab bhi hum object banate hai to key and value same
    // to hum name:name aise nahi likhte we can simply write name 
    // same is happening in case of cartData 
    cartData 
})



