import {addToCart,emptyCart,removeFromCart} from '../Redux/action'
import {useDispatch} from 'react-redux'
import { productList } from '../Redux/productAction';
import {useSelector} from 'react-redux'
import {useEffect} from 'react'


function Main() {
  const dispatch = useDispatch()

  const data = useSelector((state)=>state.productData)

  console.warn('Data in main Component', data);

  // button ki click pe api call ho rahi hai aur tab products list display ho rahe hain home page
  // me ,,, but actually hona ye chahiye ki jaise hi webpage load ho tabhi saare products 
  // show ho jaai home page pe for that we need to use useEffect hook here in this case 

  useEffect(() => {
    
   dispatch(productList()) 
   

  },[])


  return (
    <div className="m-5 ">
   
    <button onClick={()=> dispatch(emptyCart())} className='btn btn-danger m-1'>Empty Cart</button>
    <div className='product-container d-flex flex-wrap justify-content-around'>
    {
      data.map((item)=> <div className='card m-3 p-3' key={item.id} style={{width:'18rem', boxShadow:'5px 10px 5px #EBECF0' }}>
      
      <img src={item.photo} alt='' />
     <div className='' style={{textAlign:'center'}}>
        <div>Brand : {item.name}</div>
        <div>Color : {item.color}</div>
        <div>Price : {item.price}</div>
        <div><button className='btn btn-outline-success m-1' onClick={()=> dispatch(addToCart(item))}>Add to Cart</button></div>
        <div><button className='btn btn-outline-danger m-1' onClick={()=> dispatch(removeFromCart(item.id))}>Remove to Cart</button></div>
     </div>
      </div>)
    }  
    </div>          
    </div>
  );
}

export default Main;

