import { PRODUCT_LIST } from "./constant"

// API call is always an async operation isliye hum function ko async bana dete hai 
export const productList = async() =>{
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    // API se data transfer hota hai wo json format me nahi hota isliye humein usse 
    // JSON format me convert karna hota hai 
    
    data = await data.json()

    console.warn('Action Called!!', data)

     return{

        type:PRODUCT_LIST,
        data
           }
}



