import {addToCart,emptyCart,removeFromCart} from '../Redux/action'
import {useDispatch} from 'react-redux'
import { productList } from '../Redux/productAction';
import {useSelector} from 'react-redux'


function Main() {
  const dispatch = useDispatch()

  const data = useSelector((state)=>state.productData)

  console.warn('Data in main Component', data);

  const product = {

    name:'iphone',
    type:'mobile',
    price: 1000
  }


  return (
    <div className="m-5 ">
    <button onClick={()=> dispatch(addToCart(product))} className='btn btn-success m-1'>Add to Cart</button>
    <button onClick={()=> dispatch(removeFromCart(product))} className='btn btn-warning m-1'>Remove from Cart</button>  
    <button onClick={()=> dispatch(emptyCart())} className='btn btn-danger m-1'>Empty Cart</button>
    <button onClick={()=> dispatch(productList())} className='btn btn-primary m-1'>Get Product List</button>          
    </div>
  );
}

export default Main;

