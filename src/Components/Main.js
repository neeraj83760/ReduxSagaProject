import {addToCart} from '../Redux/action'
import {useDispatch} from 'react-redux'


function Main() {
  const dispatch = useDispatch()
  
  const product = {

    name:'iphone',
    type:'mobile',
    price: 1000
  }

  return (
    <div className="m-5 ">
    <button onClick={()=> dispatch(addToCart(product))} className='btn btn-danger'>Add to Cart</button>  
    </div>
  );
}

export default Main;

