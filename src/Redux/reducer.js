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

export const cartData = (data = [], action) => {

// Page refresh hone pe cart ka data remove ho jaata hai ....

console.warn('Reducer Called !!', action)

return 'ABC'

}



