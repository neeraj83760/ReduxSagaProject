import { ADD_TO_CART, REMOVE_TO_CART } from "./constant"

//  Actions : plain functions hote hai jaise hum javascript ke functions
// banate hai na waise hi ... In function ko call hum tab karte hai jab humien 
// reactjs se redux ke andar data 
// ko send karne ke liye use hota hai.

// VVVIMP : jab bhi hum action ke andar data lenge na uske baad humien wo data 
// apne paas nahi rakhna hota usko humien definetly send karna hota hai 
// reducer ke pass 

// Ho saketa hai aap action ke andar kuch change kareke bhejo jaise aapne logic implement
// kara hai ya data me change kara hai wo agar aap chaho to aap kar sakte ho action
// ke andar but aapko data definetly reducer ke pass bhejna hi hoga .. Reducer us data
// ko store karke rakhta hai taaki aap usse dusre component me use kar paao

// Directly hum data reducer me kyu nahi send kar sakete .. humein actions se kyu pass karwana
// padta hai ?  Actually reducer me hum raw data rakhete hai jo humein directly store kawana
// hota hai Store ke andar ..... KeyPoint : reducer ke andar hum data ko process nahi kar sakte
// kuch logic likhna chahe wo nahi likh sakte wo sara kaam humein action ke andar karna padta hai

// Wasie bhi reducer ke pass ye capabilities nahi hoti ki wo reactjs ke saath directly Intract 
// kar paaye but action ke pass hoti hai 

// KeyPoint : Jab bhi hum action ki andar return karenge to uske andar type key honi chahiye aur
// wo same type ke reducer ke andar bhi hogi ..tabhi action ko samajh me aayega ki mujhe
// Kis reducer se baat karni hai and vice versa...dono ke andr hi type key hoti hai aur wo
// same hoti hai 

export const addToCart = (data) =>{

    console.warn('Action Called!!', data)
    // Actions me return ka type daalna must hai redux me kyonki ye type hi hai 
    // help karta hai ye confirm karne me ki kounsa reducer connect hoga kounse action ke saath 
    // return{
    // type:'ADD_TO_CART',
    // data: '1 item'
    // }

     return{

        type:REMOVE_TO_CART,

     }
}
















