import './App.css';
import {addToCart} from './Redux/action'
import {useDispatch} from 'react-redux'

// How to call Actions : Ye useDispatch hook ki help se jo react-redux me hota hai
// action ka kaam react se data leke reducer ko call karna 

// React action ko kaise pata chalt hai ki kounse reducer me data send karna hai ...the
// answer is wo return statement ki type se pata chalta hai 

function App() {
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

export default App;

